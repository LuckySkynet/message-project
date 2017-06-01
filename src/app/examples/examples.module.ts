import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './examples.routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FileuploadComponent } from './fileupload/fileupload.component';
import { SmttableComponent } from './smttable/smttable.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ExamplesComponent } from './examples.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ServerSmttableComponent } from './smttable/server-smttable.component';
import { BaseSmttableComponent } from './smttable/base-smttable.component';
import { SmttableService } from './smttable/smttable.service';
import { UserData } from '../mock-data/user-mock';
import { FileUploadModule } from 'ng2-file-upload';
import { AmapComponent } from './amap/amap.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ExampleRoutingModule,
    Ng2SmartTableModule,
    TabsModule.forRoot(),
    InMemoryWebApiModule.forRoot(UserData),
    AccordionModule.forRoot(),
    FileUploadModule,
    FormsModule
  ],
  declarations: [
    FileuploadComponent,
    SmttableComponent,
    ExamplesComponent,
    ServerSmttableComponent,
    BaseSmttableComponent,
    AmapComponent
  ],
  providers: [
    SmttableService
  ]
})
export class ExamplesModule { }
