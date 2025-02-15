//Spaceship prefab
class Bonusship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene, displayList, updateList

        //store pointValue
        this.points = pointValue;
    }

    update() {
        //move spaceship left
        this.x -= game.settings.spaceshipSpeed*2;

        //wraparound from left to right edge
        if(this.x <= 0-this.width*6) {
            this.points += 50;
            this.reset();
    }
}

    //reset ship to end of screen
    reset() {
        this.x = game.config.width;
    }
}