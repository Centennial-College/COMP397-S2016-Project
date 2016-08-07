/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the menu scene for the game.
 * @version 0.1.15 - addded fade in for menu scene
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * This Menu scene extends the objects.Scene object 
     * 
     * @export
     * @class Menu
     * @extends {objects.Scene}
     */
    export class Menu extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _ocean: objects.Ocean;
        private _titleLabel: objects.Label;
        private _instructionsLabel: objects.Label;
        private _playGameLabel: objects.Label;
        private _startButton: objects.Button;

        /**
         * Creates an instance of Menu.
         */
        constructor(type: number) {
            super(type);
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the menu scene
         * 
         * @public
         * @method start
         * @returns {void}
         */
        public Start(): void {
            // Add Ocean Background
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);

            // Add Title Label
            this._titleLabel = new objects.Label(
                "The Drowzy Dragon", "60px", "DrowzyFont", "#FF0",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true
            );
            this.addChild(this._titleLabel);

            // Add Instructions Label
            this._instructionsLabel = new objects.Label(
                "Instructions", "40px", "DrowzyFont", "#FF0",
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80, true
            );
            this.addChild(this._instructionsLabel);

            // this._startButton = new objects.Button(
            //     "NextButton",
            //     config.Screen.CENTER_X + 150,
            //     config.Screen.CENTER_Y + 80, true
            // )
            // this.addChild(this._startButton);

            // Add Play Game Label
            this._playGameLabel = new objects.Label(
                "Play Game", "40px", "DrowzyFont", "#FF0",
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80, true
            );
            this.addChild(this._playGameLabel);

            // add the start button
            // this._startButton = new objects.Button(
            //     "NextButton", 320, 420, true
            // )
            // this.addChild(this._startButton);

            // Start button event listener
            // this._startButton.on("click", this._startButtonClick, this);
            this._instructionsLabel.on("click", this._instructionsButtonClick, this);

            this._playGameLabel.on("click", this._playGameButtonClick, this);

            // Setup Background
            this._setupBackground("WhiteBackground");

            // fade-in and add scene to stage 
            super.Start()
        }

        /**
         * Update game objects in the menu scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public Update(): void {
            // scene updates happen here...
            this._ocean.update();
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // EVENT HANDLERS ++++++++++++++++
        private _instructionsButtonClick(event: createjs.MouseEvent): void {
            // Switch to the STORY1 Scene
            core.scene = config.Scene.STORY1;
            core.changeScene();
        }

        private _playGameButtonClick(event: createjs.MouseEvent): void {
            // Switch to the STAGELOADING1 Scene
            core.scene = config.Scene.STAGELOADING1;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++