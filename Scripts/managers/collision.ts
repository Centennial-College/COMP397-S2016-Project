/**
 * @file collision.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the collision manager used to determine if there is collision between two GameObjects
 * @version 0.01.05 - updated collision manager to check for horizontal collisions instead of vertical
 */
module managers {
    /**
     * This is the Collision manager object used in the game
     * 
     * @export
     * @class Collision
     */
    export class Collision {
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Collision.
         * 
         */
        constructor() {

            this.start();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public start(): void {

        }

        /**
         * This method updates the object's properties everytime it is called
         *          
         * @public
         * @method update
         * @returns {void} 
         */
        public update(): void {

        }

        /**
         * This method checks for collision between the Player GameObject and another GameObject
         * 
         * @public
         * @method check
         * @param {objects.GameObject} player
         * @param {objects.GameObject} other
         * @returns {void}
         */
        public check(player: objects.GameObject, other: objects.GameObject):void {
            // check to see if object is colliding

            if (objects.Vector2.distance(player.position, other.position) < (player.halfWidth + other.halfWidth)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    // if plane collides with cloud
                    if (other.name === "cloud") {
                        createjs.Sound.play("thunder");
                        core.lives -= 1;

                    }

                    // if plane collides with island
                    if (other.name === "island") {
                        createjs.Sound.play("yay");
                        core.score += 100;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}