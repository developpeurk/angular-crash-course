import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false
  messages: Array<any> = [];

  constructor(private services: MyFirstService) {

    this.messages = this.services.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
   }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.isSubmitted = true;
    this.services.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    })
  }

  deleteMessage(index: number): void {
    this.services.deleteMessage(index);
  }

}
