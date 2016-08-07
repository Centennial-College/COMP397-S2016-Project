/**
 * @file button.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the prototype for a GUI button control.
 * @version 0.1.18 - updated button class to include hover-over images when mouse-over
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * This is the generic objects namespace
 * 
 * @module objects
 */
module objects {
    /**
     * This simple Button class extends the createjs.Bitmap object.
     * It includes two private methods to handle mouseover and mouseout events.
     * It also includes two public methods which enable/disable buttons.
     * 
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    export class Button extends createjs.Bitmap {

        private btnLabel: objects.Label;
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Button.
         * 
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        constructor(private pathString: string, x: number, y: number, isCentered: boolean) {
            super(core.assets.getResult(pathString));

            // Check if user wants to change regX and regY values to the center 
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            this.btnLabel = new objects.Label(
                "Play Game", "40px", "DrowzyFont", "#FF0",
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80, true
            );

            // binds the mouseover and mouseout events to the button object
            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this)
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method disables the mouse events for the button and turns it semi-transparent
         * 
         * @public
         * @method DisableButton
         * @returns {void}
         */
        public DisableButton(): void {
            this.alpha = 0.7;
            this.mouseEnabled = false;
        }

        /**
         * This method enables the button events for the button and turns its opaque
         * 
         * @public
         * @method EnableButton
         * @returns {void} 
         */
        public EnableButton(): void {
            this.alpha = 1.0;
            this.mouseEnabled = true;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the mouseover event
         * 
         * @private
         * @method _mouseOver
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        private _mouseOver(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
            this.image = core.assets.getResult(this.pathString + "-hover");
        }

        /**
         * This is an event handler for the mouseout event
         * 
         * @private
         * @method _mouseOut
         * @param {createjs.MouseEvent} event
         * @returns {void}
         */
        private _mouseOut(event: createjs.MouseEvent): void {
            this.alpha = 1.0;
            this.image = core.assets.getResult(this.pathString)
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++