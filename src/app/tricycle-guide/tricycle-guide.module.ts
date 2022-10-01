import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricycleGuidePageRoutingModule } from './tricycle-guide-routing.module';

import { TricycleGuidePage } from './tricycle-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricycleGuidePageRoutingModule
  ],
  declarations: [TricycleGuidePage]
})
export class TricycleGuidePageModule {}
