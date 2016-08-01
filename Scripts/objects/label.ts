/**
 * @file label.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the prototype for a GUI control that displays text.
 * @version 0.1.0 - inital commit
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * This is the generic objects namespace
 * 
 * @module objects
 */
module objects {
    /**
     * This simple Label class extends the createjs.Text object.
     * A Label may be centered by setting true into isCentered constructor parameter
     * 
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    export class Label extends createjs.Text {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Label.
         * 
         * @param {string} labelString
         * @param {string} labelFont
         * @param {string} labelColour
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        constructor(
            private labelString: string,
            private fontSize: string,
            private fontFamily: string,
            private fontColour: string,
            x: number,
            y: number,
            isCentered: boolean) {
            super(labelString, (fontSize + " " + fontFamily), fontColour);

            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            // assign label coordinates
            this.x = x;
            this.y = y;

        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++