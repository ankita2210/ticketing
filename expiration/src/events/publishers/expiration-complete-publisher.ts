import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ankita-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
