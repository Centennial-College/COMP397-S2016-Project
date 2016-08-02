/**
 * @file level.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the level scene for the game.
 * @version 0.1.5 - created and linked instructions.ts to menu.ts 
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * This Level scene extends the objects.Scene object 
     * 
     * @export
     * @class Level
     * @extends {objects.Scene}
     */
    export class Level extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _levelLabel: objects.Label;

        /**
         * Creates an instance of Level.
         */
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the level scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public Start(): void {
            this._levelLabel = new objects.Label(
                "Level 1", "60px", "DrowzyFont", "#000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true
            );
            this.addChild(this._levelLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the level scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public Update(): void {
            // scene updates happen here...
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