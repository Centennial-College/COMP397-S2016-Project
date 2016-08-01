/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the menu scene for the game.
 * @version 0.1.2 - added custom flappy bird font
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
        constructor() {
            super();
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
                320, 240, true
            );
            this.addChild(this._titleLabel);

            // Add Instructions Label
            this._instructionsLabel = new objects.Label(
                "Instructions", "40px", "DrowzyFont", "#FF0",
                200, 300, true
            );
            this.addChild(this._instructionsLabel);

            // Add Play Game Label
            this._playGameLabel = new objects.Label(
                "Play Game", "40px", "DrowzyFont", "#FF0",
                450, 300, true
            );
            this.addChild(this._playGameLabel);

            // add the start button
            // this._startButton = new objects.Button(
            //     "startButton", 320, 420, true
            // )
            // this.addChild(this._startButton);

            // Start button event listener
            // this._startButton.on("click", this._startButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
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
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++