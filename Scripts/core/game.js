/// <reference path="_reference.ts"/>
/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 7, 2016
 * @description This file is entry point for the game
 * @version 0.1.15 - addded fade in for menu scene
*/
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    // score and lives variables
    // declare scene variables
    var currentScene;
    var menu;
    var instructions;
    var stageLoading;
    var level;
    var shop;
    var continueScene;
    var gameover;
    var exit;
    // asset manifest for images and sounds
    var assetData = [
        { id: "ocean", src: "../../Assets/images/ocean.gif" },
        { id: "WhiteBackground", src: "../../Assets/images/WhiteBackground.png" }
    ];
    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        // call the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage
    }
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu(core.scene);
                currentScene = menu;
                break;
            // LEVEL 1 ++++++++++++++++++++++++++++++++++++
            // Show the Background Story of level 1
            case config.Scene.STORY1:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions(core.scene);
                currentScene = instructions;
                break;
            // Show the Instructions of level 1
            case config.Scene.INSTRUCTIONS1:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions(core.scene);
                currentScene = instructions;
                break;
            // Show loading stage for level 1
            case config.Scene.STAGELOADING1:
                core.stage.removeAllChildren();
                stageLoading = new scenes.Loading(core.scene);
                currentScene = stageLoading;
                break;
            // Show Level 1 of the game
            case config.Scene.LEVEL1:
                core.stage.removeAllChildren();
                level = new scenes.Level(core.scene);
                currentScene = level;
                break;
            // show Shop for Level 1
            case config.Scene.SHOP1:
                core.stage.removeAllChildren();
                shop = new scenes.Shop(core.scene);
                currentScene = shop;
                break;
            // show continue scene for level 1
            case config.Scene.CONTINUE1:
                core.stage.removeAllChildren();
                continueScene = new scenes.Continue(core.scene);
                currentScene = continueScene;
                break;
            // LEVEL 2 ++++++++++++++++++++++++++++++++++++
            // Show the Background Story of level 2
            case config.Scene.STORY2:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions(core.scene);
                currentScene = instructions;
                break;
            // Show the Instructions of level 2
            case config.Scene.INSTRUCTIONS2:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions(core.scene);
                currentScene = instructions;
                break;
            // Show loading stage for level 2
            case config.Scene.STAGELOADING2:
                core.stage.removeAllChildren();
                stageLoading = new scenes.Loading(core.scene);
                currentScene = stageLoading;
                break;
            // Show Level 2 of the game
            case config.Scene.LEVEL2:
                core.stage.removeAllChildren();
                level = new scenes.Level(core.scene);
                currentScene = level;
                break;
            // show Shop for Level 2
            case config.Scene.SHOP2:
                core.stage.removeAllChildren();
                shop = new scenes.Shop(core.scene);
                currentScene = shop;
                break;
            // show continue scene for level 2
            case config.Scene.CONTINUE2:
                core.stage.removeAllChildren();
                continueScene = new scenes.Continue(core.scene);
                currentScene = continueScene;
                break;
            // LEVEL 3 ++++++++++++++++++++++++++++++++++++
            // Show the Background Story of level 3
            case config.Scene.STORY3:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions(core.scene);
                currentScene = instructions;
                break;
            // Show the Instructions of level 3
            case config.Scene.INSTRUCTIONS3:
                core.stage.removeAllChildren();
                instructions = new scenes.Instructions(core.scene);
                currentScene = instructions;
                break;
            // Show loading stage for level 3
            case config.Scene.STAGELOADING3:
                core.stage.removeAllChildren();
                stageLoading = new scenes.Loading(core.scene);
                currentScene = stageLoading;
                break;
            // Show Level 3 of the game
            case config.Scene.LEVEL3:
                core.stage.removeAllChildren();
                level = new scenes.Level(core.scene);
                currentScene = level;
                break;
            // BOSS ENCOUNTER ++++++++++++++++++++++++++++++++++++
            // show boss1 dialogue and loading
            case config.Scene.BOSSLOADING1:
                core.stage.removeAllChildren();
                stageLoading = new scenes.Loading(core.scene);
                currentScene = stageLoading;
                break;
            // Show Boss 1 level of the game
            case config.Scene.BOSS1:
                core.stage.removeAllChildren();
                level = new scenes.Level(core.scene);
                currentScene = level;
                break;
            // show boss2 dialogue and loading
            case config.Scene.BOSSLOADING2:
                core.stage.removeAllChildren();
                stageLoading = new scenes.Loading(core.scene);
                currentScene = stageLoading;
                break;
            // Show Boss 2 level of the game
            case config.Scene.BOSS2:
                core.stage.removeAllChildren();
                level = new scenes.Level(core.scene);
                currentScene = level;
                break;
            // show final boss dialogue and loading
            case config.Scene.BOSSLOADING3:
                core.stage.removeAllChildren();
                stageLoading = new scenes.Loading(core.scene);
                currentScene = stageLoading;
                break;
            // Show final boss level of the game
            case config.Scene.BOSS3:
                core.stage.removeAllChildren();
                level = new scenes.Level(core.scene);
                currentScene = level;
                break;
            // END GAME  ++++++++++++++++++++++++++++++++++++
            // Show game over lose scene
            case config.Scene.OVERLOSE:
                core.stage.removeAllChildren();
                gameover = new scenes.GameOver(core.scene);
                currentScene = gameover;
                break;
            // Show game over win scene
            case config.Scene.OVERWIN:
                core.stage.removeAllChildren();
                gameover = new scenes.GameOver(core.scene);
                currentScene = gameover;
                break;
            // Show exit game scene
            case config.Scene.EXIT:
                core.stage.removeAllChildren();
                exit = new scenes.Exit(core.scene);
                currentScene = exit;
                break;
        }
    }
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map