import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeepneyGuidePage } from './jeepney-guide.page';

const routes: Routes = [
  {
    path: '',
    component: JeepneyGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeepneyGuidePageRoutingModule {}
