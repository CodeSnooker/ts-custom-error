import { DatabaseError, ErrorType, DuplicateRecordError, NullFieldError, RecordNotFoundError, ValidationError, UnknownError } from '../lib';

// DatabaseError,
// DuplicateRecord,
// NullFieldError,
// RecordNotFoundError,
// ValidationError,
// UnknownError

class Watermelon {
    public getDatabaseError(customMessage?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            throw new DatabaseError(customMessage)
        })
    }

    public getDuplicateError(customMessage?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            throw new DuplicateRecordError(customMessage)
        })
    }

    public getNullFieldError(customMessage?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            throw new NullFieldError(customMessage)
        })
    }

    public getRecordNotFoundError(customMessage?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            throw new RecordNotFoundError(customMessage)
        })
    }

    public getValidationError(customMessage?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            throw new ValidationError(customMessage)
        })
    }

    public getUnknownError(customMessage?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            throw new UnknownError(customMessage)
        })
    }

}

let watermelon: Watermelon

beforeEach(() => {
    watermelon = null
    watermelon = new Watermelon()
})

afterAll(() => {
    watermelon = null
})

describe('Custom Errors', () => {

    test('Database Error', async () => {

        await expect(watermelon.getDatabaseError()).rejects.toBeInstanceOf(DatabaseError)

        try {
            await watermelon.getDatabaseError()
        } catch (error) {
            expect(error).toBeInstanceOf(DatabaseError)

            if (error instanceof DatabaseError) {
                expect(error.toJSON().code).toBe(ErrorType.DatabaseErrorType)
            }
        }
    })

    test('Duplicate Record Error', async () => {

        await expect(watermelon.getDuplicateError()).rejects.toBeInstanceOf(DuplicateRecordError)

        try {
            await watermelon.getDuplicateError()
        } catch (error) {
            expect(error).toBeInstanceOf(DuplicateRecordError)

            if (error instanceof DuplicateRecordError) {
                expect(error.toJSON().code).toBe(ErrorType.DuplicateRecordType)
            }
        }
    })

    test('Null Field Error', async () => {

        await expect(watermelon.getNullFieldError()).rejects.toBeInstanceOf(NullFieldError)
        await expect(watermelon.getNullFieldError()).rejects.not.toBeInstanceOf(DuplicateRecordError)

        try {
            await watermelon.getNullFieldError()
        } catch (error) {
            expect(error).toBeInstanceOf(NullFieldError)

            if (error instanceof NullFieldError) {
                expect(error.toJSON().code).toBe(ErrorType.NullFieldErrorType)
            }
        }
    })

    test('Record not found Error', async () => {

        await expect(watermelon.getRecordNotFoundError()).rejects.toBeInstanceOf(RecordNotFoundError)
        await expect(watermelon.getRecordNotFoundError()).rejects.not.toBeInstanceOf(DuplicateRecordError)

        try {
            await watermelon.getRecordNotFoundError()
        } catch (error) {
            expect(error).toBeInstanceOf(RecordNotFoundError)

            if (error instanceof RecordNotFoundError) {
                expect(error.toJSON().code).toBe(ErrorType.RecordNotFoundErrorType)
            }
        }
    })

    test('Validation Error', async () => {

        await expect(watermelon.getValidationError()).rejects.toBeInstanceOf(ValidationError)
        await expect(watermelon.getValidationError()).rejects.not.toBeInstanceOf(DuplicateRecordError)

        try {
            await watermelon.getValidationError()
        } catch (error) {
            expect(error).toBeInstanceOf(ValidationError)

            if (error instanceof ValidationError) {
                expect(error.toJSON().code).toBe(ErrorType.ValidationErrorType)
            }
        }
    })

    test('Unknown Error', async () => {

        let customMessage = 'This is custom message'
        await expect(watermelon.getUnknownError()).rejects.toBeInstanceOf(UnknownError)
        await expect(watermelon.getUnknownError()).rejects.not.toBeInstanceOf(DuplicateRecordError)

        try {
            await watermelon.getUnknownError(customMessage)
        } catch (error) {
            expect(error).toBeInstanceOf(UnknownError)
            expect(error.toJSON().message).toStrictEqual(customMessage)

            if (error instanceof UnknownError) {
                expect(error.toJSON().code).toBe(ErrorType.UnknownErrorType)
            }

        }
    })

})