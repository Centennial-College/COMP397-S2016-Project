/**
 * @file continue.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the continue and new features scene for the game.
 * @version 0.1.10 - shop1 to continue1
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
     * The continue scene extends the objects.Scene object
     *
     * @export
     * @class continue
     * @extends {objects.Scene}
     */
    var Continue = (function (_super) {
        __extends(Continue, _super);
        /**
         * Creates an instance of continue.
         *
         * @param {string} type will be determined by config constants when changing scenes
         */
        function Continue(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the continue scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Continue.prototype.Start = function () {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            // add title of the scene
            this._titleLabel = new objects.Label("Would you like to continue?", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._titleLabel);
            // add link to return to menu
            this._backLabel = new objects.Label("Replay Stage", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backLabel);
            // add link to go to see Features
            this._nextLabel = new objects.Label("Next Stage", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._nextLabel);
            // add event listeners
            this._backLabel.on("click", this._backButtonClick, this);
            this._nextLabel.on("click", this._nextButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the continue scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Continue.prototype.Update = function () {
            // scene updates happen here...
            // this._ocean.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Continue.prototype._backButtonClick = function (event) {
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
        };
        Continue.prototype._nextButtonClick = function (event) {
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
        };
        return Continue;
    }(objects.Scene));
    scenes.Continue = Continue;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=continue.js.map