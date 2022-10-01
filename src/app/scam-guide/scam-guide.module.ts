import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScamGuidePageRoutingModule } from './scam-guide-routing.module';

import { ScamGuidePage } from './scam-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScamGuidePageRoutingModule
  ],
  declarations: [ScamGuidePage]
})
export class ScamGuidePageModule {}
