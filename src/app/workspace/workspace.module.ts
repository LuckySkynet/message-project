import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace.routing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// 页面布局
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopmenuComponent } from '../topmenu/topmenu.component';

@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    BsDropdownModule
  ],
  declarations: [
    WorkspaceComponent,
    FooterComponent,
    SidebarComponent,
    TopmenuComponent
  ]
})
export class WorkspaceModule { }
