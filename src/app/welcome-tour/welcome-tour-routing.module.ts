import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeTourPage } from './welcome-tour.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeTourPageRoutingModule {}
