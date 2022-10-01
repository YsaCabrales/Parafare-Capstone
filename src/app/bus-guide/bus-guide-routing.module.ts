import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusGuidePage } from './bus-guide.page';

const routes: Routes = [
  {
    path: '',
    component: BusGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusGuidePageRoutingModule {}
