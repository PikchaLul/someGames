import Phaser from 'phaser';

import button1 from '../assets/images/ui/blue_button01.png';
import button2 from '../assets/images/ui/blue_button02.png';
import items from '../assets/images/items.png';
import characters from '../assets/images/characters.png';
import goldSound from '../assets/audio/Pickup.wav';

class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.loadImages();
        this.loadSpriteSheets();
        this.loadAudio();
    }

    loadImages(){
        this.load.image('button1', button1);
        this.load.image('button2', button2);
    }

    loadSpriteSheets(){
        this.load.spritesheet('items', items, { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('characters', characters, { frameWidth: 32, frameHeight: 32 });
    }

    loadAudio(){
        this.load.audio('goldSound', [goldSound]);
    }

    create(){
        this.scene.start('Title');
    }
}

export default BootScene;