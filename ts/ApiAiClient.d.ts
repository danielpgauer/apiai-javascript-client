import { ApiAiConstants } from "./ApiAiConstants";
import { IApiClientOptions, IRequestOptions, IServerResponse, IStringMap } from "./Interfaces";
export * from "./Interfaces";
export { ApiAiConstants } from "./ApiAiConstants";
export declare class ApiAiClient {
    private apiLang;
    private apiVersion;
    private apiBaseUrl;
    private sessionId;
    private accessToken;
    constructor(options: IApiClientOptions);
    textRequest(query: any, options?: IRequestOptions): Promise<IServerResponse>;
    eventRequest(eventName: any, eventData?: IStringMap, options?: IRequestOptions): Promise<IServerResponse>;
    getAccessToken(): string;
    getApiVersion(): string;
    getApiLang(): ApiAiConstants.AVAILABLE_LANGUAGES;
    getApiBaseUrl(): string;
    setSessionId(sessionId: string): void;
    getSessionId(): string;
    /**
     * generates new random UUID
     * @returns {string}
     */
    private guid();
}
