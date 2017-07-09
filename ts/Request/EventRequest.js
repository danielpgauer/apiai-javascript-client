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
var Request_1 = require("./Request");
var EventRequest = (function (_super) {
    __extends(EventRequest, _super);
    function EventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventRequest;
}(Request_1["default"]));
exports.EventRequest = EventRequest;

//# sourceMappingURL=EventRequest.js.map
