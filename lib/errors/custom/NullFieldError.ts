import { ErrorType } from "../base/ErrorType";
import { CustomError } from "./CustomError";

export class NullFieldError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.NullFieldErrorType,
            message: message || 'Null Field Error',
            name: 'NullFieldError'
        })
    }
}