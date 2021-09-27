import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

export interface Command {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  messagesInput: Subject<Command>;
  messagesOutput: Observable<Command[]>;
  constructor() {
    this.messagesInput = new Subject<Command>();
    this.messagesOutput = this.messagesInput.pipe(
      scan((acc: Command[], value: Command) => {
        if (value.type === 'clear') {
          return acc.filter((message) => message.id !== value.id);
        } else {
          return [...acc, value];
        }
      }, [])
    );
  }

  addSuccess(message: string) {
    const id = uuidv4;
    this.messagesInput.next({
      id,
      type: 'success',
      text: message,
    });
    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }

  addError(message: string) {
    const id = uuidv4;
    this.messagesInput.next({
      id,
      type: 'error',
      text: message,
    });

    setTimeout(() => {
      this.clearMessage(id);
    }, 5000);
  }

  clearMessage(id: number) {
    this.messagesInput.next({
      id: uuidv4,
      type: 'clear',
    });
  }
}
