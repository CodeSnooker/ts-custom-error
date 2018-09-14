import { ErrorType } from "../base/ErrorType";
import { CustomError } from "./CustomError";

export class RecordNotFoundError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.RecordNotFoundErrorType,
            message: message || 'Record Not Found Error',
            name: 'RecordNotFoundError'
        })
    }
}