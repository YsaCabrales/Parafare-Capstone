import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeTourPageRoutingModule } from './welcome-tour-routing.module';

import { WelcomeTourPage } from './welcome-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeTourPageRoutingModule
  ],
  declarations: [WelcomeTourPage]
})
export class WelcomeTourPageModule {}
