import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

}
