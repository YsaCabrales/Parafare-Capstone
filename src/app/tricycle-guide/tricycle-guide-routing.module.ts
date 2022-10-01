import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TricycleGuidePage } from './tricycle-guide.page';

const routes: Routes = [
  {
    path: '',
    component: TricycleGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TricycleGuidePageRoutingModule {}
