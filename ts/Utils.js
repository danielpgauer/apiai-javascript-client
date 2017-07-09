"use strict";
exports.__esModule = true;
var ApiAiUtils = (function () {
    function ApiAiUtils() {
    }
    /**
     * make it in more appropriate way
     * @param object
     * @returns object
     */
    ApiAiUtils.cloneObject = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    return ApiAiUtils;
}());
exports["default"] = ApiAiUtils;

//# sourceMappingURL=Utils.js.map
