import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { MessageService } from '../message-service/message.service';
import { Phone } from '../message-model/phone.model';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {
  private ckeditorContent: string;
  private phones: Phone[];
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.getPhones().subscribe(
      data => {
        this.phones = data
      },
      error => {
        console.error(error)
      }
    );
  }
}
