import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkGuidePageRoutingModule } from './walk-guide-routing.module';

import { WalkGuidePage } from './walk-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkGuidePageRoutingModule
  ],
  declarations: [WalkGuidePage]
})
export class WalkGuidePageModule {}
