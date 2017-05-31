import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { MessagePageComponent } from './message-page/message-page.component';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message.routing';
import { CKEditorModule } from 'ng2-ckeditor';
import { MessageService } from './message-service/message.service';
import { PhoneData } from '../mock-data/phone-mock';
//Datepicker Module
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MessageRoutingModule,
    FormsModule,
    CKEditorModule,
    InMemoryWebApiModule.forRoot(PhoneData),
    Ng2SmartTableModule
  ],
  declarations: [
    MessagePageComponent,
    MessageComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }
