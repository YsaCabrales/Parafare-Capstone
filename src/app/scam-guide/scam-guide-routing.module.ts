import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScamGuidePage } from './scam-guide.page';

const routes: Routes = [
  {
    path: '',
    component: ScamGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScamGuidePageRoutingModule {}
