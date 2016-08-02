/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file stores game constants for the different scenes
 * @version 0.1.4 - updated config.scene.ts to include other scenes
 */
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        ;
        Scene.MENU = 0;
        Scene.OVER = 20;
        // Level 1 Constants
        Scene.STORY1 = 1;
        Scene.INSTRUCTIONS1 = 2;
        Scene.STAGELOADING1 = 3;
        Scene.LEVEL1 = 4;
        Scene.SHOP1 = 5;
        Scene.CONTINUE1 = 6;
        // Level 2 Constants
        Scene.STORY2 = 7;
        Scene.INSTRUCTIONS2 = 8;
        Scene.STAGELOADING2 = 9;
        Scene.LEVEL2 = 10;
        Scene.SHOP2 = 11;
        Scene.CONTINUE2 = 12;
        // Level 3 Constants
        Scene.STORY3 = 13;
        Scene.INSTRUCTIONS3 = 14;
        Scene.STAGELOADING3 = 15;
        Scene.LEVEL3 = 16;
        // Boss Encounters
        Scene.BOSS1 = 17;
        Scene.BOSS2 = 18;
        Scene.BOSS3 = 19;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map