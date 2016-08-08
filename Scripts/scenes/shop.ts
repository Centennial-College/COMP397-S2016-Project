/**
 * @file shop.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the shop scene for the game.
 * @version 0.1.11 - included level 2 into the game framework
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module scenes {
    /**
     * The shop scene extends the objects.Scene object
     * 
     * @export
     * @class shop
     * @extends {objects.Scene}
     */
    export class Shop extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _backLabel: objects.Label;
        private _nextLabel: objects.Label;

        /**
         * Creates an instance of shop.
         * 
         * @param {string} type will be determined by config constants when changing scenes
         */
        constructor(type: number) {
            super(type);
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the shop scene
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
                // shop Stage for level 1
                case config.Scene.SHOP1:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Shop Stage 1", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 1
                    this._nextLabel = new objects.Label(
                        "Continue?", "40px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    );
                    this.addChild(this._nextLabel);

                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;

                // shop Stage for level 2
                case config.Scene.SHOP2:
                    // add title of the scene
                    this._titleLabel = new objects.Label(
                        "Shop Stage 2", "60px", "DrowzyFont", "#000",
                        config.Screen.CENTER_X, config.Screen.CENTER_Y, true
                    );
                    this.addChild(this._titleLabel);

                    // add link to go to level 2
                    this._nextLabel = new objects.Label(
                        "Continue?", "40px", "DrowzyFont", "#000",
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
         * Update game objects in the shop scene
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
        private _nextButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.SHOP1:
                    core.scene = config.Scene.CONTINUE1;
                    break;
                case config.Scene.SHOP2:
                    core.scene = config.Scene.CONTINUE2;
                    break;
            }
            core.changeScene();
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++