import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';
import { MessagePageComponent } from './message-page/message-page.component';

const routes: Routes = [
  {
    path: '',
    component: MessageComponent,
    children: [
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full'
      },
      {
        path: 'page',
        component: MessagePageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule { }
