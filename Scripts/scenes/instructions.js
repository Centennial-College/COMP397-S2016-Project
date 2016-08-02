/**
 * @file instructions.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the instructions and new features scene for the game.
 * @version 0.1.5 - created and linked instructions.ts to menu.ts
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
         */
        function Instructions() {
            _super.call(this);
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
            this._instructionsLabel = new objects.Label("Instructions Level 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._instructionsLabel);
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
        Instructions.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.STORY1;
            core.changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=instructions.js.map