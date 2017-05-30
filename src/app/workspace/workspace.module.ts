import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace.routing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Layout
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopmenuComponent } from '../topmenu/topmenu.component';

// Directive
import { SIDEBAR_DIRECTIVE } from '../shared/sidebar.directive';

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
    TopmenuComponent,
    SIDEBAR_DIRECTIVE
  ]
})
export class WorkspaceModule { }
