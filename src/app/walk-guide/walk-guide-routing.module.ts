import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkGuidePage } from './walk-guide.page';

const routes: Routes = [
  {
    path: '',
    component: WalkGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkGuidePageRoutingModule {}
