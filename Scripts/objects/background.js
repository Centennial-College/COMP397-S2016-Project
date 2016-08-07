var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file background.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the prototype for the background object.
 * @version 0.01.17 - created general background.ts class for side-scrolling background object
 */
var objects;
(function (objects) {
    /**
     * This is the Background object used in the game
     *
     * @export
     * @class Background
     * @extends {createjs.Bitmap}
     */
    var Background = (function (_super) {
        __extends(Background, _super);
        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Background.
         *
         * @constructor
         * @param {string} imageString
         * @param {number} width
         * @param {number} height
         */
        function Background(imageString, width, height, scrollSpeed) {
            _super.call(this, core.assets.getResult(imageString));
            this.width = width;
            this.height = height;
            this.scrollSpeed = scrollSpeed;
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++        
        /**
         * Resets the objects outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Background.prototype._reset = function () {
            this.x = 0;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Background.prototype._checkBounds = function () {
            if (this.x <= -(this.width - config.Screen.WIDTH)) {
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
        Background.prototype.start = function () {
            this._reset();
            this._dx = -this.scrollSpeed;
        };
        /**
         * This method updates the object's properties
         * everytime it is called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Background.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map