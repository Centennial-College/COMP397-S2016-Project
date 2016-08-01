/**
 * @file island.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date July 28, 2016
 * @description This file is the prototype for the Island GameObject.
 * @version 0.01.03 - updated island to move from right to left
 */
module objects {
    /**
     * This is the Island object used in the game
     * 
     * @export
     * @class Island
     * @extends {objects.GameObject}
     */
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        private _dx: number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++++++++++++

        // CONSTRUCTORS ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
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
            this.x = 640 + this.width;
            // get a random y location
            this.y = Math.floor((Math.random() * (480 - this.halfHeight)) + this.halfHeight);
            // math.floor gives us solid integer
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
            this.position = new Vector2(this.x, this.y);
            this._checkBounds();
        }
    }
}