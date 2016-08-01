/**
 * @file cloud.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the prototype for Cloud GameObject
 * @version 0.01.04 - updated clouds to move from right to left
 */
module objects {
    /**
     * This is the Cloud object used in the game
     * 
     * @export
     * @class Cloud
     * @extends {objects.GameObject}
     */
    export class Cloud extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _dy: number;
        private _dx: number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Cloud.
         *
         * @constructor 
         * @param {string} imageString
         */
        constructor(imageString: string) {
            super(imageString);
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
        private _reset(): void {
            this._dx = -Math.floor(Math.random() * 5 + 5); // horizontal speed b/t 5 and 10
            this._dy = Math.floor(Math.random() * 4 - 2); // -2 to 2, vertical drift 

            this.x = 640 + this.width;
            // get a random y location
            this.y = Math.floor((Math.random() * (480 - this.halfHeight)) + this.halfHeight);
        }

        /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds(): void {
            if (this.x <= (0 - this.halfWidth)) {
                // if (this.y >= (480 + (this.height * 0.5))) {
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
            this.y += this._dy;
            this.x += this._dx;
            this.position = new Vector2(this.x, this.y);
            this._checkBounds();
        }
    }
}