import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TabsetComponent } from 'ngx-bootstrap';
import { flyIn } from '../../animations/fly-in';

@Component({
  selector: 'app-smttable',
  templateUrl: './smttable.component.html',
  styleUrls: ['./smttable.component.scss'],
  animations: [flyIn]
})
export class SmttableComponent implements OnInit {


  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  constructor() { }

  ngOnInit() { }

}
