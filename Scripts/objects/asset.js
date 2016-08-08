/**
 * @file asset.ts
 * @author Kevin Ma kma45@my.centennialcollge.ca
 * @studentID 300867968
 * @date August 1, 2016
 * @description This file is the prototype for an asset of the project.
 * @version 0.1.0 - initial commit
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * This is the generic objects namespace
 *
 * @module objects
 */
var objects;
(function (objects) {
    /**
     * This simple Asset class only contains a constructor
     *
     * @export
     * @class Asset
     */
    var Asset = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Asset.
         *
         * @param {string} id
         * @param {string} src
         */
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    }());
    objects.Asset = Asset;
})(objects || (objects = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=asset.js.map