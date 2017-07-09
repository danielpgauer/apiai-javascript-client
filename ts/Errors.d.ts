export declare abstract class ApiAiBaseError extends Error {
    message: string;
    abstract name: string;
    stack: string;
    constructor(message: string);
}
export declare class ApiAiClientConfigurationError extends ApiAiBaseError {
    name: string;
    constructor(message: string);
}
export declare class ApiAiRequestError extends ApiAiBaseError {
    message: string;
    code: number;
    name: string;
    constructor(message: string, code?: number);
}
