/**
 * @file ocean.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the prototype for the ocean object.
 * @version 0.01.01 - changed ocean flow direction in ocean.ts and ocean.gif
 */
module objects {
    /**
     * This is the Ocean object used in the game
     * 
     * @export
     * @class Ocean
     * @extends {createjs.Bitmap}
     */
    export class Ocean extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _dx: number;

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Ocean.
         *
         * @constructor 
         * @param {string} imageString
         */
        constructor(imageString: string) {
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
            // ocean picture is 640 x 1440
            // canvas is 640 x 480
            // start at -960 so that only one screens width on screen (1440-480 = 960)
            // this.y = -960;

            // now we are doing everything on its side
            // ocean picture is 1440 x 640
            // canvas is still 640 x 480
            // 1440 - 640 = 800
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
            if (this.x <= -800) {
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
            this._dx = -5;   // 5px per frame left
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