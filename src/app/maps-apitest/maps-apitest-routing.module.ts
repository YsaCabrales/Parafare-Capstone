import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsAPItestPage } from './maps-apitest.page';

const routes: Routes = [
  {
    path: '',
    component: MapsAPItestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsAPItestPageRoutingModule {}
