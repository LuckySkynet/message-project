import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message.routing';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule
  ],
  declarations: [
    MessagePageComponent,
    MessageComponent
  ]
})
export class MessageModule { }
