import { CustomError } from "./customError";

export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);

        // Since we extend built in class
        // https://stackoverflow.com/a/41429145
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
