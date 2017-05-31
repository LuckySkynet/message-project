import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileuploadComponent } from './fileupload/fileupload.component';
import { SmttableComponent } from './smttable/smttable.component';
import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'fileupload',
        pathMatch: 'full'
      },
      {
        path: 'fileupload',
        component: FileuploadComponent
      },
      {
        path: 'smarttable',
        component: SmttableComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ExampleRoutingModule { }
