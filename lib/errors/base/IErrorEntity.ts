import { ErrorType } from "./ErrorType";

export interface IErrorEntity {
    message?: string
    code?: ErrorType
    stack?: string
    name?: string
}