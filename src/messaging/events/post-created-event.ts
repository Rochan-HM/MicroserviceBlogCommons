import { Subjects } from "../subjects";

export interface TicketCreatedEvent {
    subject: Subjects.PostCreated;
    data: {
        id: string;
        title: string;
        body: number;
        userId: string;
    };
}
