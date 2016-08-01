var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file island.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the prototype for the Island GameObject.
 * @version 0.01.03 - updated island to move from right to left
 */
var objects;
(function (objects) {
    /**
     * This is the Island object used in the game
     *
     * @export
     * @class Island
     * @extends {objects.GameObject}
     */
    var Island = (function (_super) {
        __extends(Island, _super);
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Island(imageString) {
            _super.call(this, imageString);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * Resets the objects outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Island.prototype._reset = function () {
            this.x = 640 + this.width;
            // get a random y location
            this.y = Math.floor((Math.random() * (480 - this.halfHeight)) + this.halfHeight);
            // math.floor gives us solid integer
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Island.prototype._checkBounds = function () {
            if (this.x <= (0 - this.halfWidth)) {
                this._reset();
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
        Island.prototype.start = function () {
            this._reset();
            this._dx = -5; // 5px per frame left
        };
        /**
         * This method updates the object's properties
         * everytime it is called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Island.prototype.update = function () {
            this.x += this._dx;
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map