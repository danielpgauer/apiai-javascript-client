import { ApiAiClient } from "../ApiAiClient";
import { IRequestOptions, IServerResponse } from "../Interfaces";
declare abstract class Request {
    protected apiAiClient: ApiAiClient;
    protected options: IRequestOptions;
    private static handleSuccess(xhr);
    private static handleError(xhr);
    protected uri: any;
    protected requestMethod: any;
    protected headers: any;
    constructor(apiAiClient: ApiAiClient, options: IRequestOptions);
    perform(overrideOptions?: any): Promise<IServerResponse>;
}
export default Request;
