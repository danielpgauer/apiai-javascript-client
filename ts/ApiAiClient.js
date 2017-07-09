"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var ApiAiConstants_1 = require("./ApiAiConstants");
var Errors_1 = require("./Errors");
var EventRequest_1 = require("./Request/EventRequest");
var TextRequest_1 = require("./Request/TextRequest");
__export(require("./Interfaces"));
var ApiAiConstants_2 = require("./ApiAiConstants");
exports.ApiAiConstants = ApiAiConstants_2.ApiAiConstants;
var ApiAiClient = (function () {
    function ApiAiClient(options) {
        if (!options || !options.accessToken) {
            throw new Errors_1.ApiAiClientConfigurationError("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || ApiAiConstants_1.ApiAiConstants.DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || ApiAiConstants_1.ApiAiConstants.DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || ApiAiConstants_1.ApiAiConstants.DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    ApiAiClient.prototype.textRequest = function (query, options) {
        if (options === void 0) { options = {}; }
        if (!query) {
            throw new Errors_1.ApiAiClientConfigurationError("Query should not be empty");
        }
        options.query = query;
        return new TextRequest_1["default"](this, options).perform();
    };
    ApiAiClient.prototype.eventRequest = function (eventName, eventData, options) {
        if (eventData === void 0) { eventData = {}; }
        if (options === void 0) { options = {}; }
        if (!eventName) {
            throw new Errors_1.ApiAiClientConfigurationError("Event name can not be empty");
        }
        options.event = { name: eventName, data: eventData };
        return new EventRequest_1.EventRequest(this, options).perform();
    };
    // @todo: implement local tts request
    /*public ttsRequest(query) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        return new TTSRequest(this).makeTTSRequest(query);
    }*/
    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {
        return new UserEntitiesRequest(this, options);
    }*/
    ApiAiClient.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ApiAiClient.prototype.getApiVersion = function () {
        return (this.apiVersion) ? this.apiVersion : ApiAiConstants_1.ApiAiConstants.DEFAULT_API_VERSION;
    };
    ApiAiClient.prototype.getApiLang = function () {
        return (this.apiLang) ? this.apiLang : ApiAiConstants_1.ApiAiConstants.DEFAULT_CLIENT_LANG;
    };
    ApiAiClient.prototype.getApiBaseUrl = function () {
        return (this.apiBaseUrl) ? this.apiBaseUrl : ApiAiConstants_1.ApiAiConstants.DEFAULT_BASE_URL;
    };
    ApiAiClient.prototype.setSessionId = function (sessionId) {
        this.sessionId = sessionId;
    };
    ApiAiClient.prototype.getSessionId = function () {
        return this.sessionId;
    };
    /**
     * generates new random UUID
     * @returns {string}
     */
    ApiAiClient.prototype.guid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    };
    return ApiAiClient;
}());
exports.ApiAiClient = ApiAiClient;

//# sourceMappingURL=ApiAiClient.js.map
