import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../errors/forbiddenError";

const protectedRoute = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
        throw new ForbiddenError();
    }

    next();
};

export { protectedRoute };
