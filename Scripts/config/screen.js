/**
 * @file screen.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file stores constants regarding the screen
 * @version 0.1.3 - added config.game.ts and config.screen.ts
 */
var config;
(function (config) {
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map