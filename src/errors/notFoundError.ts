import { CustomError } from "./customError";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super("Not Found");

        // Since we extend built in class
        // https://stackoverflow.com/a/41429145
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: "Not Found",
            },
        ];
    }
}
