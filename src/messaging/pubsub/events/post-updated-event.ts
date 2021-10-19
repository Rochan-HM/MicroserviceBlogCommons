import { Subjects } from "../../subjects";

export interface TicketUpdatedEvent {
    subject: Subjects.PostUpdated;
    data: {
        id: string;
        title: string;
        body: number;
        userId: string;
    };
}
