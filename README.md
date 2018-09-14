[![Build Status](https://travis-ci.org/CodeSnooker/ts-custom-error.svg?branch=master)](https://travis-ci.org/CodeSnooker/ts-custom-error)
[![Coverage Status](https://coveralls.io/repos/github/CodeSnooker/ts-custom-error/badge.svg?branch=master)](https://coveralls.io/github/CodeSnooker/ts-custom-error?branch=master)

# @codesnooker/ts-custom-error
Create custom error for your node typescript project

## Installation

```
npm install -D @codesnooker/ts-custom-error
```

## Usage

### 1. Throw and Grab customized errors
   
   We can actually through the inbuild customized errors and grab them based on error type. For example,

```
import { RecordNotFoundError } from '@codesnooker/ts-custom-error'
import { IUser } from './models'
import { UserRepository } from './repositories'

class Watermelon {

    userRepo:UserRepository

    async public findUser(userId): Promise<IUser> {

        let user:IUser
        try {
            user = await userRepo.findUser('code.snooker@gmail.com')
        }catch(error) {
            if (error instanceof RecordNotFoundError) {
                console.log('Cannot find user')
            } else {
                console.log('Unknown Error')
            }
        }

        return user
    }
}
```

Once you catch error, you can do whatever you want to do. If you don't like to deal it right now, just don't catch it and then it will be caught by calling method. It's called [Chain of Responsibility Design Pattern](https://www.oodesign.com/chain-of-responsibility-pattern.html)

### 2. For creating your own CustomError

```
import { ErrorType } from "@codesnooker/ts-custom-error";
import { CustomError } from "@codesnooker/ts-custom-error";

export class PasswordMismatchError extends CustomError {

    constructor(message?: string) {
        super({
            code: ErrorType.ValidationErrorType,
            message: message || 'Your password does not match with the database password',
            name: 'PasswordMismatchError'
        })
    }
}
```

All the fields are optional and can be modified as per response you need in your API. Now to use this Error in our code, we can simply import the Error class in the file and throw it whenever it is required. Example -

```
import { PasswordMismatchError } from './my-errors'

class Watermelon {
    public matchThePassword(currentPassword, storedPassword): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (currentPassword !== storedPassword) {
            throw new PasswordMismatchError()
            } else {
                resolve(true)
            }
        })
    }
}
```

### 3. Create your own custom error with your own custom fields

3.1 Define your own ErrorEntity class

```
    // ./entities/ILamdaException.ts

    export interface ILamdaException {
        message?: string
        devMessage?: string
        customField?: string 
    }
```

3.2 Now create your custom error class using ```AbstractError```

```
    import { AsbtractError } from '@codesnooker/ts-custom-error'
    import { ILamdaException } from './entities/ILamdaException'

    export class LamdaError extends AbstractError<ILamdaException> {

      /**
        * Converts the error to JSON object as per your wish
        * @returns JSON object
        */ 
        public toJSON(): ILamdaException {
            return {
                message: this.data.message,
                devMessage: this.data.devMessage,
                customField: this.data.customField
            }
        }

    }
```

Cheers! Now you can use your LamdaError in your project with your custom data type. See example, [```CustomError```](https://github.com/CodeSnooker/ts-custom-error/blob/master/lib/errors/custom/CustomError.ts) class.