import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusGuidePageRoutingModule } from './bus-guide-routing.module';

import { BusGuidePage } from './bus-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusGuidePageRoutingModule
  ],
  declarations: [BusGuidePage]
})
export class BusGuidePageModule {}
