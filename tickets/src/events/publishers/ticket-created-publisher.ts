import { Publisher, Subjects, TicketCreatedEvent } from '@ankita-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
   subject : Subjects.TicketCreated = Subjects.TicketCreated
}
