/**
 * @file collision.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the collision manager used to determine if there is collision between two GameObjects
 * @version 0.01.04 - updated clouds to move from right to left
 */
var managers;
(function (managers) {
    /**
     * This is the Collision manager object used in the game
     *
     * @export
     * @class Collision
     */
    var Collision = (function () {
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Collision.
         *
         */
        function Collision() {
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
        Collision.prototype.start = function () {
        };
        /**
         * This method updates the object's properties everytime it is called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Collision.prototype.update = function () {
        };
        /**
         * This method checks for collision between the Player GameObject and another GameObject
         *
         * @public
         * @method check
         * @param {objects.GameObject} player
         * @param {objects.GameObject} other
         * @returns {void}
         */
        Collision.prototype.check = function (player, other) {
            // check to see if object is colliding
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
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
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map