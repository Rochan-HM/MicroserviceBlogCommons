import { Subjects } from "../subjects";

export interface PostDeletedEvent {
    subject: Subjects.PostDeleted;
    data: {
        id: string;
        title: string;
        userId: string;
    };
}
