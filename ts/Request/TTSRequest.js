"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ApiAiConstants_1 = require("../ApiAiConstants");
var Errors_1 = require("../Errors");
var XhrRequest_1 = require("../XhrRequest");
var Request_1 = require("./Request");
var TTSRequest = (function (_super) {
    __extends(TTSRequest, _super);
    function TTSRequest(apiAiClient, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, apiAiClient, options) || this;
        _this.apiAiClient = apiAiClient;
        _this.resolveTTSPromise = function (data) {
            return _this.speak(data.response);
        };
        _this.rejectTTSPromise = function (reason) {
            throw new Errors_1.ApiAiRequestError(reason);
        };
        // this.requestMethod = XhrRequest.Method.GET;
        _this.uri = ApiAiConstants_1.ApiAiConstants.DEFAULT_TTS_HOST;
        var AudioContext = window.AudioContext || webkitAudioContext;
        if (!TTSRequest.audioContext) {
            TTSRequest.audioContext = new AudioContext();
        }
        return _this;
    }
    TTSRequest.prototype.makeTTSRequest = function (text) {
        if (!text) {
            throw new Errors_1.ApiAiClientConfigurationError("Request can not be empty");
        }
        var params = {
            lang: "en-US",
            text: encodeURIComponent(text),
            v: this.apiAiClient.getApiVersion()
        };
        var headers = {
            "Accept-language": "en-US",
            "Authorization": "Bearer " + this.apiAiClient.getAccessToken()
        };
        return this.makeRequest(this.uri, params, headers, { responseType: TTSRequest.RESPONSE_TYPE_ARRAYBUFFER })
            .then(this.resolveTTSPromise)["catch"](this.rejectTTSPromise.bind(this));
    };
    TTSRequest.prototype.makeRequest = function (url, params, headers, options) {
        return XhrRequest_1["default"].get(url, params, headers, options);
    };
    TTSRequest.prototype.speak = function (data) {
        var _this = this;
        if (!data.byteLength) {
            return Promise.reject("TTS Server unavailable");
        }
        return new Promise(function (resolve, reject) {
            TTSRequest.audioContext.decodeAudioData(data, function (buffer) {
                return _this.playSound(buffer, resolve);
            }, reject).then(null, function (err) { return reject(err); });
        });
    };
    TTSRequest.prototype.playSound = function (buffer, resolve) {
        var source = TTSRequest.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(TTSRequest.audioContext.destination);
        source.onended = resolve;
        source.start(0);
    };
    ;
    TTSRequest.RESPONSE_TYPE_ARRAYBUFFER = "arraybuffer";
    return TTSRequest;
}(Request_1["default"]));
exports.TTSRequest = TTSRequest;

//# sourceMappingURL=TTSRequest.js.map
