import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommutingGuidePageRoutingModule } from './commuting-guide-routing.module';

import { CommutingGuidePage } from './commuting-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommutingGuidePageRoutingModule
  ],
  declarations: [CommutingGuidePage]
})
export class CommutingGuidePageModule {}
