/**
 * @file background.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the prototype for the background object.
 * @version 0.01.17 - created general background.ts class for side-scrolling background object
 */
module objects {
    /**
     * This is the Background object used in the game
     * 
     * @export
     * @class Background
     * @extends {createjs.Bitmap}
     */
    export class Background extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _dx: number;

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Background.
         * 
         * @constructor 
         * @param {string} imageString
         * @param {number} width
         * @param {number} height
         */
        constructor(imageString: string, private width: number, private height: number, private scrollSpeed: number) {
            super(core.assets.getResult(imageString));

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
        private _reset(): void {
            this.x = 0;
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.x <= -(this.width - config.Screen.WIDTH)) {
                this._reset();
            }
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
            this._reset();
            this._dx = -this.scrollSpeed;
        }

        /**
         * This method updates the object's properties 
         * everytime it is called
         *
         * @public
         * @method update
         * @returns {void} 
         */
        public update(): void {
            this.x += this._dx;
            this._checkBounds();
        }
    }
}