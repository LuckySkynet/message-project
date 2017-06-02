import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileuploadComponent } from './fileupload/fileupload.component';
import { SmttableComponent } from './smttable/smttable.component';
import { ExamplesComponent } from './examples.component';
import { AmapComponent } from './amap/amap.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    data: { title: 'examples' },
    children: [
      {
        path: '',
        redirectTo: 'fileupload',
        pathMatch: 'full'
      },
      {
        path: 'fileupload',
        component: FileuploadComponent,
        data: { title: 'fileupload' }
      },
      {
        path: 'smarttable',
        component: SmttableComponent,
        data: { title: 'smarttable' }
      },
      {
        path: 'amap',
        component: AmapComponent,
        data: { title: 'amap' }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ExampleRoutingModule { }
