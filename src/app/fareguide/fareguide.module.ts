import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FareguidePageRoutingModule } from './fareguide-routing.module';

import { FareguidePage } from './fareguide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FareguidePageRoutingModule
  ],
  declarations: [FareguidePage]
})
export class FareguidePageModule {}
