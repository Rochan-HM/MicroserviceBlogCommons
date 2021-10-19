import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface Payload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: Payload;
        }
    }
}

const getCurrentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        const payload = jwt.verify(
            req.session.jwt,
            process.env.JWT_SIGN!
        ) as Payload;
        req.currentUser = payload;
    } catch (err) {
    } finally {
        next();
    }
};

export { getCurrentUser };
