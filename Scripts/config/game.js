/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file stores game constants
 * @version 0.1.3 - added config.game.ts and config.screen.ts
 */
var config;
(function (config) {
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map