/**
 * @file loading.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the loading and new features scene for the game.
 * @version 0.1.7 - linked instructions1 and menu to stageloading1
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
     * The loading scene extends the objects.Scene object
     *
     * @export
     * @class loading
     * @extends {objects.Scene}
     */
    var Loading = (function (_super) {
        __extends(Loading, _super);
        /**
         * Creates an instance of loading.
         *
         * @param {string} type will be determined by config constants when changing scenes
         */
        function Loading(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the loading scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Loading.prototype.Start = function () {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                // Loading Stage for level 1
                case config.Scene.STAGELOADING1:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Loading Stage 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to level 1
                    this._nextLabel = new objects.Label("Loading...", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                // Loading Stage for level 2
                case config.Scene.STAGELOADING2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Loading Stage 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to level 2
                    this._nextLabel = new objects.Label("Loading...", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                // The loading of Level 3
                case config.Scene.STAGELOADING3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Loading Stage 3", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to level 3
                    this._nextLabel = new objects.Label("Loading...", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
            }
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the loading scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Loading.prototype.Update = function () {
            // scene updates happen here...
            // this._ocean.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Loading.prototype._backButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.STORY1:
                    core.scene = config.Scene.MENU;
                    break;
                case config.Scene.INSTRUCTIONS1:
                    core.scene = config.Scene.STORY1;
                    break;
            }
            core.changeScene();
        };
        Loading.prototype._nextButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.STAGELOADING1:
                    core.scene = config.Scene.LEVEL1;
                    break;
                case config.Scene.STAGELOADING2:
                    core.scene = config.Scene.LEVEL2;
                    break;
                case config.Scene.STAGELOADING3:
                    core.scene = config.Scene.BOSS1;
                    break;
            }
            core.changeScene();
        };
        return Loading;
    }(objects.Scene));
    scenes.Loading = Loading;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=loading.js.map