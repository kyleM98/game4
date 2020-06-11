class Scene1 extends Phaser.Scene {
    constructor(){
        super('bootGame')
    }
    preload(){
        this.load.image("graveyard", "assets/night.png");
        this.load.image('ground', 'assets/magmaMediumBlock.png');
        this.load.image('end', 'assets/magmaSmallBlock3.png');
        this.load.image('grass', 'assets/magma1.png');
        this.load.image('star', 'assets/redstar1.png');
        this.load.image('coin', 'assets/RealCoin.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('bomb2', 'assets/bomb2.png');
        this.load.image('bomb3', 'assets/bomb3.png');

        this.load.spritesheet('dude', 
    'assets/Grimm.png',
    { frameWidth: 64, frameHeight: 64 }
);
    }
    create(){
       

        this.add.text(20,20, "loading game...");
        this.scene.start('playGame');
}
}