/**
 * @file level.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the level scene for the game.
 * @version 0.2.1 - added side-scrolling background and fade-in effect for level.ts
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
     * This Level scene extends the objects.Scene object
     *
     * @export
     * @class Level
     * @extends {objects.Scene}
     */
    var Level = (function (_super) {
        __extends(Level, _super);
        /**
         * Creates an instance of Level.
         */
        function Level(type) {
            _super.call(this, type, 1000);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the level scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Level.prototype.Start = function () {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                case config.Scene.LEVEL1:
                    this._bg = new objects.Background("level1bg", 1700, 510, 2);
                    this.addChild(this._bg);
                    // add title of the scene
                    this._titleLabel = new objects.Label("Level 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to die
                    this._backLabel = new objects.Label("Suicide", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to continue screen
                    this._nextLabel = new objects.Label("Shop", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.LEVEL2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Level 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to die
                    this._backLabel = new objects.Label("Suicide", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to continue screen
                    this._nextLabel = new objects.Label("Shop", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.LEVEL3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Level 3", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to die
                    this._backLabel = new objects.Label("Suicide", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to continue screen
                    this._nextLabel = new objects.Label("BOSS 1", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.BOSS1:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Boss 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to die
                    this._backLabel = new objects.Label("Suicide", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to continue screen
                    this._nextLabel = new objects.Label("Next Boss", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.BOSS2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Boss 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to die
                    this._backLabel = new objects.Label("Suicide", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to continue screen
                    this._nextLabel = new objects.Label("Next Boss", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                case config.Scene.BOSS3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("FINAL BOSS", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to die
                    this._backLabel = new objects.Label("Suicide", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._backLabel);
                    // add link to continue screen
                    this._nextLabel = new objects.Label("Win Game", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
            }
            this._backLabel.on("click", this._backButtonClick, this);
            // add this scene to the global scene container
            _super.prototype.Start.call(this);
        };
        /**
         * Update game objects in the level scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Level.prototype.Update = function () {
            // scene updates happen here...
            this._bg.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Level.prototype._backButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.LEVEL1:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.LEVEL2:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.LEVEL3:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.BOSS1:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.BOSS2:
                    core.scene = config.Scene.OVERLOSE;
                    break;
                case config.Scene.BOSS3:
                    core.scene = config.Scene.OVERLOSE;
                    break;
            }
            core.changeScene();
        };
        Level.prototype._nextButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.LEVEL1:
                    core.scene = config.Scene.SHOP1;
                    break;
                case config.Scene.LEVEL2:
                    core.scene = config.Scene.SHOP2;
                    break;
                case config.Scene.LEVEL3:
                    core.scene = config.Scene.BOSSLOADING1;
                    break;
                case config.Scene.BOSS1:
                    core.scene = config.Scene.BOSSLOADING2;
                    break;
                case config.Scene.BOSS2:
                    core.scene = config.Scene.BOSSLOADING3;
                    break;
                case config.Scene.BOSS3:
                    core.scene = config.Scene.OVERWIN;
                    break;
            }
            core.changeScene();
        };
        return Level;
    }(objects.Scene));
    scenes.Level = Level;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=level.js.map