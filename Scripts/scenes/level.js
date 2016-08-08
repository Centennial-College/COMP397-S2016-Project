/**
 * @file level.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 8, 2016
 * @description This file is the level scene for the game.
 * @version 0.2.3 - updated level 1 interface
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
            this._startTime = new Date().getTime();
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
                    core.gameDuration = 120;
                    // add background
                    this._bg = new objects.Background("level1bg", 1700, 510, 2);
                    this.addChild(this._bg);
                    // add hunger display
                    this._hungerTextLabel = new objects.Label("HNGR", "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 1, 32, true);
                    this.addChild(this._hungerTextLabel);
                    this._hungerLabel = new objects.Label("000", "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 1, 72, true);
                    this.addChild(this._hungerLabel);
                    // add stage display
                    this._stageTextLabel = new objects.Label("STAGE", "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 2, 32, true);
                    this.addChild(this._stageTextLabel);
                    this._stageLabel = new objects.Label("1-" + core.numberOfStageReplays, "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 2, 72, true);
                    this.addChild(this._stageLabel);
                    // add lives display
                    this._livesTextLabel = new objects.Label("LIVES", "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 3, 32, true);
                    this.addChild(this._livesTextLabel);
                    this._livesLabel = new objects.Label(core.lives.toString(), "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 3, 72, true);
                    this.addChild(this._livesLabel);
                    // add timer to scene
                    this._timerTextLabel = new objects.Label("TIME", "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 4, 32, true);
                    this.addChild(this._timerTextLabel);
                    this._timerlabel = new objects.Label("000", "40px", "DrowzyFont", "#ff0", (config.Screen.WIDTH / 5) * 4, 72, true);
                    this.addChild(this._timerlabel);
                    // add evolution display
                    this._evolutionTextLabel = new objects.Label("EVOLUTION", "40px", "DrowzyFont", "#ff0", 
                    // (config.Screen.WIDTH / 10) * 1,
                    132, 408, true);
                    this.addChild(this._evolutionTextLabel);
                    this._evolutionLabel = new objects.Label("000", "40px", "DrowzyFont", "#ff0", 
                    // (config.Screen.WIDTH / 10) * 1,
                    72, 448, true);
                    this.addChild(this._evolutionLabel);
                    break;
                case config.Scene.LEVEL2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Level 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    break;
                case config.Scene.LEVEL3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Level 3", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    break;
                case config.Scene.BOSS1:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Boss 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    break;
                case config.Scene.BOSS2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Boss 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    break;
                case config.Scene.BOSS3:
                    // add title of the scene
                    this._titleLabel = new objects.Label("FINAL BOSS", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // // add link to continue screen
                    // this._nextLabel = new objects.Label(
                    //     "Win Game", "40px", "DrowzyFont", "#000",
                    //     config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true
                    // );
                    // this.addChild(this._nextLabel);
                    break;
            }
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
            console.log('lives: ' + core.lives);
            console.log('hungerPts: ' + core.hungerPoints);
            console.log('evoPts ' + core.evolutionPoints);
            // scene updates happen here...
            this._bg.update();
            // calculate gameClock
            this._currentTime = (new Date()).getTime();
            var timeDifference = Math.floor((this._currentTime - this._startTime) / 1000);
            var timeRemaining = (core.gameDuration - timeDifference);
            // time reaches 0
            if (!timeRemaining) {
                core.scene = config.Scene.OVERLOSE;
                core.changeScene();
            }
            // pad with 0's to maintain format
            if (timeRemaining < 10) {
                this._timerlabel.text = "00" + timeRemaining.toString();
            }
            else if (timeRemaining < 100) {
                this._timerlabel.text = "0" + timeRemaining.toString();
            }
            else {
                this._timerlabel.text = timeRemaining.toString();
            }
            // evolution pts can have up to 8 digits
            if (core.evolutionPoints < 10) {
                this._evolutionLabel.text = "0000000" + core.evolutionPoints.toString();
            }
            else if (core.evolutionPoints < 100) {
                this._evolutionLabel.text = "000000" + core.evolutionPoints.toString();
            }
            else if (core.evolutionPoints < 1000) {
                this._evolutionLabel.text = "00000" + core.evolutionPoints.toString();
            }
            else if (core.evolutionPoints < 1000) {
                this._evolutionLabel.text = "0000" + core.evolutionPoints.toString();
            }
            else if (core.evolutionPoints < 10000) {
                this._evolutionLabel.text = "000" + core.evolutionPoints.toString();
            }
            else if (core.evolutionPoints < 100000) {
                this._evolutionLabel.text = "00" + core.evolutionPoints.toString();
            }
            else if (core.evolutionPoints < 1000000) {
                this._evolutionLabel.text = "0" + core.evolutionPoints.toString();
            }
            else {
                this._evolutionLabel.text = core.evolutionPoints.toString();
            }
            if (core.hungerPoints < 10) {
                this._hungerLabel.text = "00" + core.hungerPoints.toString();
            }
            else if (core.hungerPoints < 100) {
                this._hungerLabel.text = "0" + core.hungerPoints.toString();
            }
            else {
                this._hungerLabel.text = core.hungerPoints.toString();
            }
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