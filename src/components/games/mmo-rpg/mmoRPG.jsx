import Phaser from 'phaser';

import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';
import UiScene from './scenes/UiScene';

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        BootScene,
        GameScene,
        TitleScene,
        UiScene,
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 0,
            },
        },
    },
};

let game = new Phaser.Game(config);

function MMOrpg() {
    return (
        <h1>Игра</h1>
    )
}

export default MMOrpg;