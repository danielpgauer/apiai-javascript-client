import { ApiAiClient } from "../ApiAiClient";
import { IRequestOptions } from "../Interfaces";
import Request from "./Request";
export declare class TTSRequest extends Request {
    protected apiAiClient: ApiAiClient;
    private static RESPONSE_TYPE_ARRAYBUFFER;
    private static audioContext;
    constructor(apiAiClient: ApiAiClient, options?: IRequestOptions);
    makeTTSRequest(text: string): Promise<any>;
    private resolveTTSPromise;
    private rejectTTSPromise;
    private makeRequest(url, params, headers, options);
    private speak(data);
    private playSound(buffer, resolve);
}
