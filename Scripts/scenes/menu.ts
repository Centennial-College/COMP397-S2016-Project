/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the menu scene for the game.
 * @version 0.2.0 - added fadein and loading animation to loading.ts
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
        private _menuBackground: objects.Background;

        private _titleLabel: objects.Label;
        private _playGameButton: objects.Button;
        private _instructionsButton: objects.Button;

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
            // Add Menu Background
            this._menuBackground = new objects.Background(
                "menubackground",
                1920,
                1200,
                1
            )
            this.addChild(this._menuBackground);

            // Add Title Label
            this._titleLabel = new objects.Label(
                "The Drowzy Dragon", "60px", "DrowzyFont", "#FF0",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true
            );
            this.addChild(this._titleLabel);

            // Add the Instructions Button
            this._instructionsButton = new objects.Button(
                "instructionsMenuButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 80,
                true
            )
            this.addChild(this._instructionsButton)

            // Add the Play Button
            this._playGameButton = new objects.Button(
                "playMenuButton",
                config.Screen.CENTER_X + 150,
                config.Screen.CENTER_Y + 80,
                true
            )
            this.addChild(this._playGameButton);

            // Add Event Listeners
            this._instructionsButton.on("click", this._instructionsButtonClick, this);

            this._playGameButton.on("click", this._playGameButtonClick, this);

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
            this._menuBackground.update();
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