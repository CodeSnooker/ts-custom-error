import { ErrorType } from "../base/ErrorType";
import { CustomError } from "./CustomError";

export class DuplicateRecordError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.DuplicateRecordType,
            message: message || 'Duplicate Record Error',
            name: 'DuplicateRecordError'
        })
    }
}