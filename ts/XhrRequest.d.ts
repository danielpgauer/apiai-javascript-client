import { IStringMap } from "./Interfaces";
/**
 * quick ts implementation of example from
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * with some minor improvements
 * @todo: test (?)
 * @todo: add node.js implementation with node's http inside. Just to make SDK cross-platform
 */
declare class XhrRequest {
    static ajax(method: XhrRequest.Method, url: string, args?: IStringMap, headers?: IStringMap, options?: IStringMap): Promise<any>;
    static get(url: any, payload?: IStringMap, headers?: IStringMap, options?: {}): Promise<any>;
    static post(url: string, payload?: IStringMap, headers?: IStringMap, options?: {}): Promise<any>;
    static put(url: string, payload?: IStringMap, headers?: IStringMap, options?: {}): Promise<any>;
    static delete(url: string, payload?: IStringMap, headers?: IStringMap, options?: {}): Promise<any>;
    private static XMLHttpFactories;
    private static createXMLHTTPObject();
}
declare namespace XhrRequest {
    enum Method {
        GET,
        POST,
        PUT,
        DELETE,
    }
}
export default XhrRequest;
