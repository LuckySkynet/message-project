import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [flyIn]
})

export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
