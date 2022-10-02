import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsAPItestPageRoutingModule } from './maps-apitest-routing.module';

import { MapsAPItestPage } from './maps-apitest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsAPItestPageRoutingModule
  ],
  declarations: [MapsAPItestPage]
})
export class MapsAPItestPageModule {}
