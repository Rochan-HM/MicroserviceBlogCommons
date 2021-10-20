import { Subjects } from "../subjects";

export interface CommentUpdatedevent {
    subject: Subjects.CommentUpdated;
    data: {
        id: string;
        title: string;
        userId: string;
    };
}
