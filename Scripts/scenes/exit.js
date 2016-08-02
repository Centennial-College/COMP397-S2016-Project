/**
 * @file exit.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the exit scene for the game.
 * @version 0.1.14 - included exit scene into the game framework
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
     * The exit scene extends the objects.Scene object
     *
     * @export
     * @class exit
     * @extends {objects.Scene}
     */
    var Exit = (function (_super) {
        __extends(Exit, _super);
        /**
         * Creates an instance of exit.
         *
         * @param {string} type will be determined by config constants when changing scenes
         */
        function Exit(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the exit scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Exit.prototype.Start = function () {
            // add title of the scene
            this._titleLabel = new objects.Label("Thank you for playing!", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._titleLabel);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the exit scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Exit.prototype.Update = function () {
            // scene updates happen here...
            // this._ocean.update();
        };
        return Exit;
    }(objects.Scene));
    scenes.Exit = Exit;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=exit.js.map