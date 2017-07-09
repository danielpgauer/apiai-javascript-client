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
var Utils_1 = require("../Utils");
var XhrRequest_1 = require("../XhrRequest");
var Request_1 = require("./Request");
var UserEntitiesRequest = (function (_super) {
    __extends(UserEntitiesRequest, _super);
    function UserEntitiesRequest(apiAiClient, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, apiAiClient, options) || this;
        _this.options = options;
        _this.baseUri = _this.apiAiClient.getApiBaseUrl() + UserEntitiesRequest.ENDPOINT;
        return _this;
    }
    UserEntitiesRequest.prototype.create = function (entities) {
        this.uri = this.baseUri;
        var options = Utils_1["default"].cloneObject(this.options);
        options.entities = Array.isArray(entities) ? entities : [entities];
        return this.perform(options);
    };
    UserEntitiesRequest.prototype.retrieve = function (name) {
        this.uri = this.baseUri + "/" + name;
        this.requestMethod = XhrRequest_1["default"].Method.GET;
        return this.perform();
    };
    UserEntitiesRequest.prototype.update = function (name, entries, extend) {
        if (extend === void 0) { extend = false; }
        this.uri = this.baseUri + "/" + name;
        this.requestMethod = XhrRequest_1["default"].Method.PUT;
        var options = Utils_1["default"].cloneObject(this.options);
        options.extend = extend;
        options.entries = entries;
        options.name = name;
        return this.perform(options);
    };
    UserEntitiesRequest.prototype["delete"] = function (name) {
        this.uri = this.baseUri + "/" + name;
        this.requestMethod = XhrRequest_1["default"].Method.DELETE;
        return this.perform();
    };
    UserEntitiesRequest.ENDPOINT = "userEntities";
    return UserEntitiesRequest;
}(Request_1["default"]));
exports.UserEntitiesRequest = UserEntitiesRequest;

//# sourceMappingURL=UserEntitiesRequest.js.map
