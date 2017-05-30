import { Component, OnInit } from '@angular/core';
import { zoomIn } from '../animations/zoom-in';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss'],
  animations: [
    zoomIn
  ]
})
export class RegistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
