import { Subjects } from "../subjects";

export interface PostCreatedEvent {
    subject: Subjects.PostCreated;
    data: {
        id: string;
        title: string;
        userId: string;
    };
}
