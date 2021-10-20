import { Subjects } from "../subjects";

export interface CommentDeletedEvent {
    subject: Subjects.CommentDeleted;
    data: {
        id: string;
        title: string;
        userId: string;
    };
}
