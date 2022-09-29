import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeofpreferencePageRoutingModule } from './modeofpreference-routing.module';

import { ModeofpreferencePage } from './modeofpreference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeofpreferencePageRoutingModule
  ],
  declarations: [ModeofpreferencePage]
})
export class ModeofpreferencePageModule {}
