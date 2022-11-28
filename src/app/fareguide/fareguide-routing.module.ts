import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FareguidePage } from './fareguide.page';

const routes: Routes = [
  {
    path: '',
    component: FareguidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FareguidePageRoutingModule {}
