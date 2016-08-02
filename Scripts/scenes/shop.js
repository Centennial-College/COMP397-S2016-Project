/**
 * @file shop.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the shop and new features scene for the game.
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
     * The shop scene extends the objects.Scene object
     *
     * @export
     * @class shop
     * @extends {objects.Scene}
     */
    var Shop = (function (_super) {
        __extends(Shop, _super);
        /**
         * Creates an instance of shop.
         *
         * @param {string} type will be determined by config constants when changing scenes
         */
        function Shop(type) {
            _super.call(this, type);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method adds game objects to the shop scene
         *
         * @public
         * @method start
         * @returns {void}
         */
        Shop.prototype.Start = function () {
            /**
             * This switch determines what scene is to be loaded into the canvas
             */
            switch (this.type) {
                // shop Stage for level 1
                case config.Scene.SHOP1:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Shop Stage 1", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to level 1
                    this._nextLabel = new objects.Label("Continue?", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
                // shop Stage for level 2
                case config.Scene.SHOP2:
                    // add title of the scene
                    this._titleLabel = new objects.Label("Shop Stage 2", "60px", "DrowzyFont", "#000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
                    this.addChild(this._titleLabel);
                    // add link to go to level 2
                    this._nextLabel = new objects.Label("Continue?", "40px", "DrowzyFont", "#000", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 180, true);
                    this.addChild(this._nextLabel);
                    // add event listeners
                    this._nextLabel.on("click", this._nextButtonClick, this);
                    break;
            }
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the shop scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Shop.prototype.Update = function () {
            // scene updates happen here...
            // this._ocean.update();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // EVENT HANDLERS ++++++++++++++++
        Shop.prototype._nextButtonClick = function (event) {
            // Switch the scene depending on what current scene is
            switch (this.type) {
                case config.Scene.SHOP1:
                    core.scene = config.Scene.CONTINUE1;
                    break;
                case config.Scene.SHOP2:
                    core.scene = config.Scene.CONTINUE2;
                    break;
            }
            core.changeScene();
        };
        return Shop;
    }(objects.Scene));
    scenes.Shop = Shop;
})(scenes || (scenes = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=shop.js.map