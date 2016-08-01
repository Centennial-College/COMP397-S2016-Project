/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the menu scene for the game.
 * @version 0.1.2 - added custom flappy bird font
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
        function Menu() {
            _super.call(this);
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
            // Add Ocean Background
            this._ocean = new objects.Ocean("ocean");
            this.addChild(this._ocean);
            // Add Title Label
            this._titleLabel = new objects.Label("The Drowzy Dragon", "60px", "DrowzyFont", "#FF0", 320, 240, true);
            this.addChild(this._titleLabel);
            // Add Instructions Label
            this._instructionsLabel = new objects.Label("Instructions", "40px", "DrowzyFont", "#FF0", 200, 300, true);
            this.addChild(this._instructionsLabel);
            // Add Play Game Label
            this._playGameLabel = new objects.Label("Play Game", "40px", "DrowzyFont", "#FF0", 450, 300, true);
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
            this._ocean.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=menu.js.map