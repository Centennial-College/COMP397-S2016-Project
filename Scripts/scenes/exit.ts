/**
 * @file exit.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the exit scene for the game.
 * @version 0.1.14 - included exit scene into the game framework
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * The exit scene extends the objects.Scene object
     * 
     * @export
     * @class exit
     * @extends {objects.Scene}
     */
    export class Exit extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _backLabel: objects.Label;
        private _nextLabel: objects.Label;

        /**
         * Creates an instance of exit.
         * 
         * @param {string} type will be determined by config constants when changing scenes
         */
        constructor(type: number) {
            super(type);
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the exit scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public Start(): void {
            // add title of the scene
            this._titleLabel = new objects.Label(
                "Thank you for playing!", "60px", "DrowzyFont", "#000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true
            );
            this.addChild(this._titleLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the exit scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public Update(): void {
            // scene updates happen here...
            // this._ocean.update();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++