import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeofpreferencePage } from './modeofpreference.page';

const routes: Routes = [
  {
    path: '',
    component: ModeofpreferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeofpreferencePageRoutingModule {}
