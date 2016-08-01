/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file stores game constants for the different scenes
 * @version 0.1.0 - initial commit
 */
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        // Level 1 Constants
        Scene.STORY1 = 0;
        Scene.INSTRUCTIONS1 = 0;
        Scene.STAGELOADING1 = 0;
        Scene.LEVEL1 = 0;
        Scene.CONTINUE1 = 0;
        Scene.SHOP1 = 0;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map