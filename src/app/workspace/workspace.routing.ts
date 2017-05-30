import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    data: {
      title: 'home'
    },
    children: [
      { path: '', redirectTo: 'message', pathMatch: 'full' },
      { path: 'message', loadChildren: '../message/message.module#MessageModule', data: { title: 'message' } },
      { path: 'examples', loadChildren: '../examples/examples.module#ExamplesModule', data: { title: 'examples' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule { }
