/**
 * @file gameover.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the gameover scene for the game.
 * @version 0.1.13 - included gameover into the game framework
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * The gameover scene extends the objects.Scene object
     * 
     * @export
     * @class gameover
     * @extends {objects.Scene}
     */
    export class GameOver extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _backLabel: objects.Label;
        private _nextLabel: objects.Label;

        /**
         * Creates an instance of gameover.
         * 
         * @param {string} type will be determined by config constants when changing scenes
         */
        constructor(type: number) {
            super(type);
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the gameover scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public Start(): void {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                // win game
                case config.Scene.OVERWIN:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "CONGRATULATIONS!", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);
                    break;

                // lose game
                case config.Scene.OVERLOSE:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "GAME OVER", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);
                    break;
            }

            // add link to play again
            this._backLabel = new objects.Label(
                "Play Again", "40px", "DrowzyFont", "#000",
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
            );
            this.addChild(this._backLabel);

            // add link to exit game
            this._nextLabel = new objects.Label(
                "Quit Game", "40px", "DrowzyFont", "#000",
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
         * Update game objects in the gameover scene
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
            core.scene = config.Scene.STORY1;
            core.changeScene();
        }

        private _nextButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            core.scene = config.Scene.EXIT;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++