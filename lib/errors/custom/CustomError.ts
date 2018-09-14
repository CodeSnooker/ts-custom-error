import { AbstractError } from "../base";
import { IErrorEntity } from "../base/IErrorEntity";

export class CustomError extends AbstractError<IErrorEntity> {

    /**
     * Converts the error to JSON object
     * @returns JSON object
     */
    public toJSON(): IErrorEntity {
        return {
            code: this.data.code,
            message: this.data.message,
            name: this.data.name
        }
    }

}