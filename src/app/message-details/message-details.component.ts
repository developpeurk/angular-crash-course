import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  @Input()
  message: any = '';

  @Input()
  index: number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }



  onDelete() {
    this.delete.emit(this.index);
  }

}
