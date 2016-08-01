var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file player.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the prototype for the Player GameObject.
 * @version 0.01.02 - chaged plane.png and player.ts to reflect side-scrolling action
 */
var objects;
(function (objects) {
    /**
     * This is the Playe object used in the game
     *
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Player.
         *
         * @constructor
         * @param {string} imageString
         */
        function Player(imageString) {
            _super.call(this, imageString);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Player.prototype._checkBounds = function () {
            // checkbound sto stop player from going outside
            // check bottom bounds
            if (this.y >= (480 - this.halfHeight)) {
                this.y = (480 - this.halfHeight);
            }
            // check upper  bounds
            if (this.y <= (0 + this.halfHeight)) {
                this.y = (0 + this.halfHeight);
            }
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Player.prototype.start = function () {
            // when we do createjs.Sound.play() we are creating a sound object
            // -1 means loop forever, negative values loop infinitely
            this.sound = createjs.Sound.play("engine");
            this.sound.loop = -1;
            this.sound.volume = 0.7;
            this.x = 65;
        };
        /**
         * This method updates the object's properties
         * everytime it is called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Player.prototype.update = function () {
            // player to follow mouse
            this.y = core.stage.mouseY;
            this._checkBounds();
            this.position = new objects.Vector2(this.x, this.y);
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map