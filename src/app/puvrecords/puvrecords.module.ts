import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PUVrecordsPageRoutingModule } from './puvrecords-routing.module';

import { PUVrecordsPage } from './puvrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PUVrecordsPageRoutingModule
  ],
  declarations: [PUVrecordsPage]
})
export class PUVrecordsPageModule {}
