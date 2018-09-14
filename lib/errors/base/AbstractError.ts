import { ErrorType } from "./ErrorType";
import { IErrorEntity } from "./IErrorEntity";

export abstract class AbstractError<T> extends Error {

    public data: Partial<T>

    constructor(error: Partial<T>) {
        super()
        this.data = error
    }

    public abstract toJSON(): T
}