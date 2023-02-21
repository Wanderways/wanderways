import { Injectable } from '@angular/core';
import { MatSnackBar,  MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private processingMessage = false;

  messages: Message[] = [];

  constructor(private matSnackBar: MatSnackBar) { }

  private displaySnackbar(): void {
    const nextMessage = this.getNextMessage();

    if (!nextMessage) {
      this.processingMessage = false; // No message in the queue, set flag false
      return;
    }

    this.processingMessage = true; // A message was dequeued and is being processed

    this.matSnackBar.open(nextMessage.message, nextMessage.acceptButton, nextMessage.options)
      .afterDismissed()
      .subscribe(() => {
        this.displaySnackbar();
      });
  }

  addMessage(message: Message): void {
    this.messages.push(message);

    if(!this.processingMessage) {
      this.displaySnackbar();
    }
  }

  private getNextMessage(): Message | undefined {
    return this.messages.length ? this.messages.shift() : undefined;
  }
}

interface Message {
  message: string,
  acceptButton: string,
  options?: MatSnackBarConfig<any>
}
