import { ErrorType } from "../base/ErrorType";
import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.DatabaseErrorType,
            message: message || 'Database Error',
            name: 'DatabaseError'
        })
    }
}