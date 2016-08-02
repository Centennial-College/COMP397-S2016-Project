/**
 * @file gameover.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the gameover scene for the game.
 * @version 0.1.13 - included gameover into the game framework
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
     * The gameover scene extends the objects.Scene object
     *
     * @export
     * @class gameover
     * @extends {objects.Scene}
     */
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        /**
         * Creates an instance of gameover.
         *
         * @param {string} type will be determined by config constants when changing scenes
         */
        function GameOver(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the gameover scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        GameOver.prototype.Start = function () {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                // win game
                case config.Scene.OVERWIN:
                    // add title of the scene
                    this._titleLabel = new objects.Label("CONGRATULATIONS!", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    break;
                // lose game
                case config.Scene.OVERLOSE:
                    // add title of the scene
                    this._titleLabel = new objects.Label("GAME OVER", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    break;
            }
            // add link to play again
            this._backLabel = new objects.Label("Play Again", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backLabel);
            // add link to exit game
            this._nextLabel = new objects.Label("Quit Game", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._nextLabel);
            // add event listeners
            this._backLabel.on("click", this._backButtonClick, this);
            this._nextLabel.on("click", this._nextButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the gameover scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        GameOver.prototype.Update = function () {
            // scene updates happen here...
            // this._ocean.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        GameOver.prototype._backButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            core.scene = config.Scene.STORY1;
            core.changeScene();
        };
        GameOver.prototype._nextButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            core.scene = config.Scene.EXIT;
            core.changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=gameover.js.map