/**
 * @file continue.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the continue and new features scene for the game.
 * @version 0.1.10 - shop1 to continue1
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * The continue scene extends the objects.Scene object
     * 
     * @export
     * @class continue
     * @extends {objects.Scene}
     */
    export class Continue extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _backLabel: objects.Label;
        private _nextLabel: objects.Label;

        /**
         * Creates an instance of continue.
         * 
         * @param {string} type will be determined by config constants when changing scenes
         */
        constructor(type: number) {
            super(type);
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the continue scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public Start(): void {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */

            // add title of the scene
            this._titleLabel = new objects.Label(
                "Would you like to continue?", "60px", "DrowzyFont", "#000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true
            );
            this.addChild(this._titleLabel);

            // add link to return to menu
            this._backLabel = new objects.Label(
                "Replay Stage", "40px", "DrowzyFont", "#000",
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
            );
            this.addChild(this._backLabel);

            // add link to go to see Features
            this._nextLabel = new objects.Label(
                "Next Stage", "40px", "DrowzyFont", "#000",
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
            );
            this.addChild(this._nextLabel);

            // add event listeners
            this._backLabel.on("click", this._backButtonClick, this);

            this._nextLabel.on("click", this._nextButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the continue scene
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
        private _backButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.CONTINUE1:
                    core.scene = config.Scene.STAGELOADING1;
                    break;
                case config.Scene.CONTINUE2:
                    core.scene = config.Scene.STAGELOADING2;
                    break;
            }
            core.changeScene();
        }

        private _nextButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.CONTINUE1:
                    core.scene = config.Scene.STORY2;
                    break;
                case config.Scene.CONTINUE2:
                    core.scene = config.Scene.STORY3;
                    break;
            }
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++