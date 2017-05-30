import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  animations:[flyIn]
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
