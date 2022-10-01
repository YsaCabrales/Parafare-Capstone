import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeepneyGuidePageRoutingModule } from './jeepney-guide-routing.module';

import { JeepneyGuidePage } from './jeepney-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeepneyGuidePageRoutingModule
  ],
  declarations: [JeepneyGuidePage]
})
export class JeepneyGuidePageModule {}
