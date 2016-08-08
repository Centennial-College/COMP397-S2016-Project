/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is the prototype for a scene of the game.
 * @version 0.2.0 - added fadein and loading animation to loading.ts
 * */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * This is the generic objects namespace
 *
 * @module objects
 */
var objects;
(function (objects) {
    /**
     * This simple Scene class extends the createjs.Container object.
     * This acts as an abstract prototype for scenes to extend from
     *
     * @export
     * @class Scene
     * @extends {createjs.Container}
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Scene.
         * The public method start is called when the object is instantiated
         */
        function Scene(type, _fadeInDuration) {
            _super.call(this);
            this.type = type;
            this._fadeInDuration = _fadeInDuration;
            this.type = type;
            this.Start();
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Add game objects to the scene in this method
         *
         * @public
         * @method start
         * @returns {void}
         */
        Scene.prototype.Start = function () {
            // FadeIn - 500 milliseconds
            this._fadeIn(this._fadeInDuration);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * Update game objects in the scene
         *
         * @public
         * @method update
         * @returns {void}
         */
        Scene.prototype.Update = function () {
        };
        // PROTECTED METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Sets the instance variable _background to the asset with the key of the
         * background parameter
         *
         * @protected
         * @method _setupBackground
         * @param {string} background
         * @returns {void}
         */
        Scene.prototype._setupBackground = function (background) {
            this._background = new createjs.Bitmap(core.assets.getResult(background));
            this.addChild(this._background);
        };
        /**
         * FadeIn method that uses the background image and  animations from tween.js
         * to smoothly transition from one scene to the next
         *
         * @protected
         * @method _fadeIn
         * @param {number} transitionTime
         * @returns {void}
         */
        Scene.prototype._fadeIn = function (transitionTime) {
            // Setup Background
            this._setupBackground("WhiteBackground");
            createjs.Tween.get(this._background).to({ alpha: 0 }, transitionTime, createjs.Ease.getPowInOut(2));
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=scene.js.map