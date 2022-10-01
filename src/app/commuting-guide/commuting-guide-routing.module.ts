import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommutingGuidePage } from './commuting-guide.page';

const routes: Routes = [
  {
    path: '',
    component: CommutingGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommutingGuidePageRoutingModule {}
