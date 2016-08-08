/**
 * @file loading.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the loading scene for the game.
 * @version 0.2.0 - added fadein and loading animation to loading.ts
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * The loading scene extends the objects.Scene object
     * 
     * @export
     * @class loading
     * @extends {objects.Scene}
     */
    export class Loading extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _backLabel: objects.Label;
        private _nextLabel: objects.Label;
        private _startTime: number;
        private _currentTime: number;

        /**
         * Creates an instance of loading.
         * 
         * @param {string} type will be determined by config constants when changing scenes
         */
        constructor(type: number) {
            super(type);
            this._startTime = new Date().getTime();
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the loading scene
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
                // Loading Stage for level 1
                case config.Scene.STAGELOADING1:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Loading Stage 1", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 1
                    this._nextLabel = new objects.Label(
                        "Loading...", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);
                    break;

                // Loading Stage for level 2
                case config.Scene.STAGELOADING2:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Loading Stage 2", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 2
                    this._nextLabel = new objects.Label(
                        "Loading...", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);
                    break;

                // The loading of Level 3
                case config.Scene.STAGELOADING3:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Loading Stage 3", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 3
                    this._nextLabel = new objects.Label(
                        "Loading...", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);
                    break;

                // The loading of first boss    
                case config.Scene.BOSSLOADING1:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Loading First Boss", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 3
                    this._nextLabel = new objects.Label(
                        "Loading...", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);
                    break;

                // The loading of second boss    
                case config.Scene.BOSSLOADING2:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Loading Second Boss", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 3
                    this._nextLabel = new objects.Label(
                        "Loading...", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);
                    break;

                // The loading of final boss    
                case config.Scene.BOSSLOADING3:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Loading Final Boss", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 3
                    this._nextLabel = new objects.Label(
                        "Loading...", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);
                    break;
            }

            // add event listeners
            this._nextLabel.on("click", this._nextButtonClick, this);

            // fade-in and add scene to stage 
            super.Start()
        }

        /**
         * Update game objects in the loading scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public Update(): void {
            // scene updates happen here...
            this._currentTime = (new Date()).getTime();
            let difference = this._currentTime - this._startTime;

            // automatically change scenes after 3 seconds
            if (Math.floor(difference / 1000) >= 3) {
                this._nextButtonClick()
            }

            if (difference % 3 == 0)
                switch (this._nextLabel.text) {
                    case "Loading":
                        this._nextLabel.text = "Loading."
                        break;
                    case "Loading.":
                        this._nextLabel.text = "Loading.."
                        break;
                    case "Loading..":
                        this._nextLabel.text = "Loading..."
                        break;
                    case "Loading...":
                        this._nextLabel.text = "Loading"
                        break;
                }


        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // EVENT HANDLERS ++++++++++++++++
        private _nextButtonClick(): void {
            // private _nextButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.STAGELOADING1:
                    core.scene = config.Scene.LEVEL1;
                    break;
                case config.Scene.STAGELOADING2:
                    core.scene = config.Scene.LEVEL2;
                    break;
                case config.Scene.STAGELOADING3:
                    core.scene = config.Scene.LEVEL3;
                    break;
                case config.Scene.BOSSLOADING1:
                    core.scene = config.Scene.BOSS1;
                    break;
                case config.Scene.BOSSLOADING2:
                    core.scene = config.Scene.BOSS2;
                    break;
                case config.Scene.BOSSLOADING3:
                    core.scene = config.Scene.BOSS3;
                    break;
            }
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++