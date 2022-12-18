import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordPuvPageRoutingModule } from './record-puv-routing.module';

import { RecordPuvPage } from './record-puv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordPuvPageRoutingModule
  ],
  declarations: [RecordPuvPage]
})
export class RecordPuvPageModule {}
