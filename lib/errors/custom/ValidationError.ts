import { ErrorType } from "../base/ErrorType";
import { CustomError } from "./CustomError";

export class ValidationError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.ValidationErrorType,
            message: message || 'Validation Error',
            name: 'ValidationError'
        })
    }
}