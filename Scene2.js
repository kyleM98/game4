

class Scene2 extends Phaser.Scene {
    constructor(){
        super('playGame')
    }
    create(){
        this.background= this.add.image(0,0, "graveyard");
        this.background.setOrigin(0, 0);
        this.bomb1= this.add.image(config.width/2 - 100, config.height/2, "bomb");
        this.bomb2= this.add.image(config.width/2, config.height/2, "bomb2");
        this.bomb3= this.add.image(config.width/2 + 100, config.height/2, "bomb3");
        this.bomb1.setScale(2);
        this.bomb2.setScale(2);
        this.bomb3.setScale(2);
    /*
    
        moveBomb(bomb, speed) {
            bomb.y += speed;
            if (bomb.y > config.height) {
                this.resetBombPos(bomb);
            }
        
       /* resetBombPos(bomb){
            bomb.y= 0;
            let randomX = Phaser.Math.Between(0, config.width);
            ship.x = randomX;
        }*/

        


        let  platforms = this.physics.add.staticGroup();

        platforms.create(300, 568, 'grass').setScale(1).refreshBody();
        platforms.create(700, 568, 'grass').setScale(1).refreshBody();
        platforms.create(1000, 568, 'grass').setScale(1).refreshBody();
        platforms.create(1300, 568, 'grass').setScale(1).refreshBody();

        platforms.create(300, 450, 'ground');
        platforms.create(50, 330, 'ground');
        platforms.create(1200, 460, 'ground');
        platforms.create(750, 330, 'ground');
        platforms.create(400, 220, 'ground');
        platforms.create(650, 120, 'ground');
        platforms.create(900, 220, 'ground');
        platforms.create(550, 450, 'ground');
        platforms.create(1340, 110, 'end');
        platforms.create(1340, 350, 'end');
        platforms.create(1180, 230, 'end');



        this.add.text(20, 20, "Playing game");
    }

update() {
    this.moveBomb(this.bomb1, 1);
    this.moveBomb(this.bomb2, 2);
    this.moveBomb(this.bomb3, 3);

}
}