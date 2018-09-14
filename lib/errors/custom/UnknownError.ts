import { ErrorType } from "../base/ErrorType";
import { CustomError } from "./CustomError";

export class UnknownError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.UnknownErrorType,
            message: message || 'Unknown Error',
            name: 'UnknownError'
        })
    }
}