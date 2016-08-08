/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the menu scene for the game.
 * @version 0.2.0 - added fadein and loading animation to loading.ts
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
     * This Menu scene extends the objects.Scene object
     *
     * @export
     * @class Menu
     * @extends {objects.Scene}
     */
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         */
        function Menu(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the menu scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Menu.prototype.Start = function () {
            // Add Menu Background
            this._menuBackground = new objects.Background("menubackground", 1920, 1200, 1);
            this.addChild(this._menuBackground);
            // Add Title Label
            this._titleLabel = new objects.Label("The Drowzy Dragon", "60px", "DrowzyFont", "#FF0", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._titleLabel);
            // Add the Instructions Button
            this._instructionsButton = new objects.Button("instructionsMenuButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._instructionsButton);
            // Add the Play Button
            this._playGameButton = new objects.Button("playMenuButton", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._playGameButton);
            // Add Event Listeners
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            this._playGameButton.on("click", this._playGameButtonClick, this);
            // fade-in and add scene to stage 
            _super.prototype.Start.call(this);
        };
        /**
         * Update game objects in the menu scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Menu.prototype.Update = function () {
            // scene updates happen here...
            this._menuBackground.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the STORY1 Scene
            core.scene = config.Scene.STORY1;
            core.changeScene();
        };
        Menu.prototype._playGameButtonClick = function (event) {
            // Switch to the STAGELOADING1 Scene
            core.scene = config.Scene.STAGELOADING1;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=menu.js.map