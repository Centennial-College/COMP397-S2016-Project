/// <reference path="_reference.ts"/>

/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is entry point for the game
 * @version 0.1.11 - included level 2 into the game framework
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations

    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    // score and lives variables

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu: scenes.Menu;
    let instructions: scenes.Instructions;
    let stageLoading: scenes.Loading;
    let level: scenes.Level;
    let shop: scenes.Shop;
    let continueScene: scenes.Continue;

    // asset manifest for images and sounds
    let assetData: objects.Asset[] = [
        { id: "ocean", src: "../../Assets/images/ocean.gif" },
        { id: "NextButton", src: "../../Assets/images/NextButton.png" }
    ];

    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void}
     */
    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event

        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        // call the scenes's update
        currentScene.Update();

        stage.update(); // refreshes the stage
    }

    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu(scene);
                currentScene = menu;
                break;
            // LEVEL 1 ++++++++++++++++++++++++++++++++++++
            // Show the Background Story of level 1
            case config.Scene.STORY1:
                stage.removeAllChildren();
                instructions = new scenes.Instructions(scene);
                currentScene = instructions;
                break;
            // Show the Instructions of level 1
            case config.Scene.INSTRUCTIONS1:
                stage.removeAllChildren();
                instructions = new scenes.Instructions(scene);
                currentScene = instructions;
                break;
            // Show loading stage for level 1
            case config.Scene.STAGELOADING1:
                stage.removeAllChildren();
                stageLoading = new scenes.Loading(scene);
                currentScene = stageLoading;
                break;
            // Show Level 1 of the game
            case config.Scene.LEVEL1:
                stage.removeAllChildren();
                level = new scenes.Level(scene);
                currentScene = level;
                break;
            // show Shop for Level 1
            case config.Scene.SHOP1:
                stage.removeAllChildren();
                shop = new scenes.Shop(scene);
                currentScene = shop;
                break;
            // show continue scene for level 1
            case config.Scene.CONTINUE1:
                stage.removeAllChildren();
                continueScene = new scenes.Continue(scene);
                currentScene = continueScene;
                break;

            // LEVEL 2 ++++++++++++++++++++++++++++++++++++
            // Show the Background Story of level 2
            case config.Scene.STORY2:
                stage.removeAllChildren();
                instructions = new scenes.Instructions(scene);
                currentScene = instructions;
                break;
            // Show the Instructions of level 2
            case config.Scene.INSTRUCTIONS2:
                stage.removeAllChildren();
                instructions = new scenes.Instructions(scene);
                currentScene = instructions;
                break;
            // Show loading stage for level 2
            case config.Scene.STAGELOADING2:
                stage.removeAllChildren();
                stageLoading = new scenes.Loading(scene);
                currentScene = stageLoading;
                break;
            // Show Level 2 of the game
            case config.Scene.LEVEL2:
                stage.removeAllChildren();
                level = new scenes.Level(scene);
                currentScene = level;
                break;
            // show Shop for Level 2
            case config.Scene.SHOP2:
                stage.removeAllChildren();
                shop = new scenes.Shop(scene);
                currentScene = shop;
                break;
            // show continue scene for level 2
            case config.Scene.CONTINUE2:
                stage.removeAllChildren();
                continueScene = new scenes.Continue(scene);
                currentScene = continueScene;
                break;

            // LEVEL 3 ++++++++++++++++++++++++++++++++++++

        }
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++