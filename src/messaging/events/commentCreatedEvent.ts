import { Subjects } from "../subjects";

export interface CommentCreatedEvent {
    subject: Subjects.CommentCreated;
    data: {
        id: string;
        title: string;
        userId: string;
    };
}
