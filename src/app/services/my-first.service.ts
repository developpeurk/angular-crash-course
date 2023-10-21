import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {

    this.init();
   }

  init(): void {
    this.insert({
      name: 'John Doe',
      email: 'jhan@gmail.com',
      message: 'Hello World!'
    
    });

    this.insert({
      name: 'Jane Doe',
      email: 'jane@email.com',
      message: 'Hi World!'
    
    });

    this.insert({
      name: 'John Smith',
      email: 'smith@gmail.com',
      message: 'Hey World!'
    
    });

    this.insert({
      name: 'Jane Smith',
      email: 'js@gmai.com',
      message: 'Ola World!'
    
    });
  }
  

  insert(message:{name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): Array<any> {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}

