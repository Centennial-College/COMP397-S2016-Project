/**
 * @file instructions.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the instructions and new features scene for the game.
 * @version 0.1.11 - included level 2 into the game framework
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scenes;
(function (scenes) {
    /**
     * The Instructions scene extends the objects.Scene object
     *
     * @export
     * @class Instructions
     * @extends {objects.Scene}
     */
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        /**
         * Creates an instance of Instructions.
         *
         * @param {string} type will be determined by config constants when changing scenes
         */
        function Instructions(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the instructions scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Instructions.prototype.Start = function () {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                // Background story for level 1
                case config.Scene.STORY1:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Background Story 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to return to menu
                    this._backLabel = new objects.Label("Return to Menu", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to go to see Features
                    this._nextLabel = new objects.Label("Instructions1", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._backLabel.on("click", this._backButtonClick, this);
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                // The Instructions of Level 1
                case config.Scene.INSTRUCTIONS1:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Instructions Level 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to return to story
                    this._backLabel = new objects.Label("Story1", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to go to play game
                    this._nextLabel = new objects.Label("Level 1", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._backLabel.on("click", this._backButtonClick, this);
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.STORY2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Background Story 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to see Features
                    this._nextLabel = new objects.Label("Instructions2", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                // The Instructions of Level 2
                case config.Scene.INSTRUCTIONS2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Instructions Level 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to return to menu
                    this._backLabel = new objects.Label("Story2", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to go to see Features
                    this._nextLabel = new objects.Label("Level 2", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._backLabel.on("click", this._backButtonClick, this);
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.STORY3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Background Story 3", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to see Features
                    this._nextLabel = new objects.Label("Instructions3", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                // The Instructions of Level 1
                case config.Scene.INSTRUCTIONS3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Instructions Level 3", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to return to menu
                    this._backLabel = new objects.Label("Story3", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to go to see Features
                    this._nextLabel = new objects.Label("Level 3", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._backLabel.on("click", this._backButtonClick, this);
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
            }
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the instructions scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Instructions.prototype.Update = function () {
            // scene updates happen here...
            // this._ocean.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Instructions.prototype._backButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.STORY1:
                    core.scene = config.Scene.MENU;
                    break;
                case config.Scene.INSTRUCTIONS1:
                    core.scene = config.Scene.STORY1;
                    break;
                case config.Scene.INSTRUCTIONS2:
                    core.scene = config.Scene.STORY2;
                    break;
                case config.Scene.INSTRUCTIONS3:
                    core.scene = config.Scene.STORY3;
                    break;
            }
            core.changeScene();
        };
        Instructions.prototype._nextButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.STORY1:
                    core.scene = config.Scene.INSTRUCTIONS1;
                    break;
                case config.Scene.INSTRUCTIONS1:
                    core.scene = config.Scene.STAGELOADING1;
                    break;
                case config.Scene.STORY2:
                    core.scene = config.Scene.INSTRUCTIONS2;
                    break;
                case config.Scene.INSTRUCTIONS2:
                    core.scene = config.Scene.STAGELOADING2;
                    break;
                case config.Scene.STORY3:
                    core.scene = config.Scene.INSTRUCTIONS3;
                    break;
                case config.Scene.INSTRUCTIONS3:
                    core.scene = config.Scene.STAGELOADING3;
                    break;
            }
            core.changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=instructions.js.map