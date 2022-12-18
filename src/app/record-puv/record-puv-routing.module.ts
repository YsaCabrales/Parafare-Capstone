import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordPuvPage } from './record-puv.page';

const routes: Routes = [
  {
    path: '',
    component: RecordPuvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordPuvPageRoutingModule {}
