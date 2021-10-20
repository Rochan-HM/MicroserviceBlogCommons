import { Subjects } from "../subjects";

export interface CommentUpdatedEvent {
    subject: Subjects.CommentUpdated;
    data: {
        id: string;
        postId: string;
        userId: string;
    };
}
