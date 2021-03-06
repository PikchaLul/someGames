import Phaser from 'phaser';

import Player from '../classes/Player';
import Chest from '../classes/Chest';

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.scene.launch('Ui');
        this.score = 0;
    }

    create() {
        this.createAudio();
        this.createChest();
        this.createWalls();
        this.createPlayer();
        this.addCollisions();
        this.createInput();
    }

    update() {
        this.player.update(this.cursors);
    }

    createAudio() {
        this.goldPickupAudio = this.sound.add('goldSound', { loop: true, volume: 0.2 });
    }

    createPlayer() {
        this.player = new Player(this, 32, 32, 'characters', 0);
    }

    createChest() {
        this.chests = this.physics.add.group();
        this.chestPositions = [[100, 100], [200, 200], [300, 300], [400, 400], [500, 500]]
        this.maxNumberOfChests = 3;

        for (let i = 0; i < this.maxNumberOfChests; i++) {
            this.spawnChest();
        }
    }

    spawnChest() {
        const location = this.chestPositions[Math.floor(Math.random() * this.chestPositions.length)];
        const chest = new Chest(this, location[0], location[1], 'items', 0);

        this.chests.add(chest);
    }

    createWalls() {
        this.wall = this.physics.add.image(500, 100, 'button1');
        this.wall.setImmovable();
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.wall);
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
    }

    collectChest(player, chest) {
        this.goldPickupAudio.play();
        this.score += chest.coins;
        this.events.emit('updateScore', this.score);
        chest.destroy();
        setTimeout(() => { this.goldPickupAudio.stop() }, 1000);

        this.time.delayedCall(1000, this.spawnChest, [], this);
    }
}

export default GameScene;