/**
 * @file level.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the level scene for the game.
 * @version 0.1.8 - linked level1 to loading1
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
        private _titleLabel: objects.Label;
        private _backLabel: objects.Label;
        private _nextLabel: objects.Label;

        /**
         * Creates an instance of Level.
         */
        constructor(type: number) {
            super(type);
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
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                case config.Scene.LEVEL1:
                // Loading Stage for level 1
                case config.Scene.STAGELOADING1:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Level 1", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to die
                    this._backLabel = new objects.Label(
                        "Suicide", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._backLabel);

                    // add link to continue screen
                    this._nextLabel = new objects.Label(
                        "Continue?", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;

                case config.Scene.LEVEL2:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Level 2", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to die
                    this._backLabel = new objects.Label(
                        "Suicide", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._backLabel);

                    // add link to continue screen
                    this._nextLabel = new objects.Label(
                        "Continue?", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;

                case config.Scene.LEVEL3:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Level 3", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to die
                    this._backLabel = new objects.Label(
                        "Suicide", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._backLabel);

                    // add link to continue screen
                    this._nextLabel = new objects.Label(
                        "Continue?", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;

                case config.Scene.BOSS1:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Boss 1", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to die
                    this._backLabel = new objects.Label(
                        "Suicide", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._backLabel);

                    // add link to continue screen
                    this._nextLabel = new objects.Label(
                        "Next Boss", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;

                case config.Scene.BOSS2:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Boss 2", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to die
                    this._backLabel = new objects.Label(
                        "Suicide", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._backLabel);

                    // add link to continue screen
                    this._nextLabel = new objects.Label(
                        "Next Boss", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;

                case config.Scene.BOSS3:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "FINAL BOSS", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to die
                    this._backLabel = new objects.Label(
                        "Suicide", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._backLabel);

                    // add link to continue screen
                    this._nextLabel = new objects.Label(
                        "Win Game", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
            }


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
        private _backButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.LEVEL1:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.LEVEL2:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.LEVEL3:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.BOSS1:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.BOSS2:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.BOSS3:
                    core.scene = config.Scene.OVERLOSE;
                    break;
            }
            core.changeScene();
        }

        private _nextButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.LEVEL1:
                    core.scene = config.Scene.SHOP1;
                    break;
                case config.Scene.LEVEL2:
                    core.scene = config.Scene.SHOP2;
                    break;
                case config.Scene.LEVEL3:
                    core.scene = config.Scene.BOSSLOADING1;
                    break;
                case config.Scene.BOSS1:
                    core.scene = config.Scene.BOSSLOADING2;
                    break;
                case config.Scene.BOSS2:
                    core.scene = config.Scene.BOSSLOADING3;
                    break;
                case config.Scene.BOSS3:
                    core.scene = config.Scene.OVERWIN;
                    break;
            }
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++