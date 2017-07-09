"use strict";
exports.__esModule = true;
var LocalTTSRequest = (function () {
    function LocalTTSRequest() {
    }
    LocalTTSRequest.prototype.isSupported = function () {
        return !!window.speechSynthesis;
    };
    LocalTTSRequest.prototype.getLanguage = function () {
    };
    return LocalTTSRequest;
}());
exports.LocalTTSRequest = LocalTTSRequest;

//# sourceMappingURL=LocalTTSRequest.js.map
