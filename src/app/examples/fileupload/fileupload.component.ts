import { Component, OnInit, ViewChild } from '@angular/core';
import { flyIn } from '../../animations/fly-in';
import { TabsetComponent } from 'ngx-bootstrap';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss'],
  animations: [flyIn]
})
export class FileuploadComponent implements OnInit {
  private URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
  public uploader: FileUploader = new FileUploader({ url: this.URL });

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor() { }

  ngOnInit() {
  }

}
