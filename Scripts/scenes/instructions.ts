/**
 * @file instructions.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the instructions and new features scene for the game.
 * @version 0.1.5 - created and linked instructions.ts to menu.ts 
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * The Instructions scene extends the objects.Scene object
     * 
     * @export
     * @class Instructions
     * @extends {objects.Scene}
     */
    export class Instructions extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _instructionsLabel: objects.Label;

        /**
         * Creates an instance of Instructions.
         */
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the instructions scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public Start(): void {

            this._instructionsLabel = new objects.Label(
                "Instructions Level 1", "60px", "DrowzyFont", "#000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true
            );
            this.addChild(this._instructionsLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the instructions scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public Update(): void {
            // scene updates happen here...
            // this._ocean.update();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // EVENT HANDLERS ++++++++++++++++
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.STORY1;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++