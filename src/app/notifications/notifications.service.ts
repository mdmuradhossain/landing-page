import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
interface Command {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  messages: Subject<Command>;
  constructor() {
    this.messages = new Subject<Command>();
  }

  addSuccess(message: string) {
    this.messages.next({
      id: uuidv4.v4(),
      type: 'success',
      text: message,
    });
  }

  addError(message: string) {
    this.messages.next({
      id: uuidv4.v4(),
      type: 'error',
      text: message,
    });
  }

  clearMessage(id: number) {
    this.messages.next({
      id: uuidv4.v4(),
      type: 'clear',
    });
  }
}
