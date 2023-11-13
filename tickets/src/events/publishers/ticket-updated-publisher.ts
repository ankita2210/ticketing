import { Publisher, Subjects, TicketUpdatedEvent } from '@ankita-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
   subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
