import { Subjects } from "../subjects";

export interface CommentCreatedEvent {
    subject: Subjects.CommentCreated;
    data: {
        id: string;
        postId: string;
        userId: string;
    };
}
