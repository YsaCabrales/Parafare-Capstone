import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUVrecordsPage } from './puvrecords.page';

const routes: Routes = [
  {
    path: '',
    component: PUVrecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PUVrecordsPageRoutingModule {}
