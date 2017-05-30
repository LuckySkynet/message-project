import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  { path: '', redirectTo: 'fileupload', pathMatch: 'full' },
  { path: 'fileupload', component: FileuploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class FileUploadRoutingModule { }
