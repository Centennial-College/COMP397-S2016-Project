/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the prototype for a scene of the game.
 * @version 0.1.15 - addded fade in for menu scene
 * */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * This is the generic objects namespace
 * 
 * @module objects
 */
module objects {
    /**
     * This simple Scene class extends the createjs.Container object.
     * This acts as an abstract prototype for scenes to extend from
     * 
     * @export
     * @class Scene
     * @extends {createjs.Container}
     */
    export abstract class Scene extends createjs.Container {
        // PROTECTED INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++
        protected _background: createjs.Bitmap;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Scene.
         * The public method start is called when the object is instantiated
         */
        constructor(protected type: number) {
            super();
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
        public Start(): void {
            // FadeIn - 500 milliseconds
            this._fadeIn(500);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        /**
         * Update game objects in the scene
         * 
         * @public
         * @method update
         * @returns {void}
         */
        public Update(): void {

        }

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
        protected _setupBackground(background: string): void {
            this._background = new createjs.Bitmap(core.assets.getResult(background));
            this.addChild(this._background);
        }

        /**
         * FadeIn method that uses the background image and  animations from tween.js 
         * to smoothly transition from one scene to the next
         * 
         * @protected
         * @method _fadeIn
         * @param {number} transitionTime
         * @returns {void}
         */
        protected _fadeIn(transitionTime: number): void {
            createjs.Tween.get(this._background).to({ alpha: 0 }, transitionTime,
                createjs.Ease.getPowInOut(2));
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++