import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
  animations: [flyIn]
})
export class FileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
