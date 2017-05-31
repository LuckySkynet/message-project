import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-service/message.service';
import { Phone } from '../message-model/phone.model';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
  animations: [flyIn]
})
export class MessagePageComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() { }
}
