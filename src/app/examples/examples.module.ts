import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadRoutingModule } from './examples.routing';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadRoutingModule
  ],
  declarations: [FileuploadComponent]
})
export class ExamplesModule { }
