import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [flyIn]
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
