import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleRoutingModule } from './examples.routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { SmttableComponent } from './smttable/smttable.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ExamplesComponent } from './examples.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ServerSmttableComponent } from './smttable/server-smttable.component';
import { BaseSmttableComponent } from './smttable/base-smttable.component';
import { SmttableService } from './smttable/smttable.service';
import { UserData } from '../mock-data/user-mock';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ExampleRoutingModule,
    Ng2SmartTableModule,
    TabsModule.forRoot(),
    InMemoryWebApiModule.forRoot(UserData)
  ],
  declarations: [
    FileuploadComponent,
    SmttableComponent,
    ExamplesComponent,
    ServerSmttableComponent,
    BaseSmttableComponent
  ],
  providers: [
    SmttableService
  ]
})
export class ExamplesModule { }
