import { Subjects } from "../subjects";

export interface CommentUpdatedEvent {
    subject: Subjects.CommentUpdated;
    data: {
        id: string;
        title: string;
        userId: string;
    };
}
