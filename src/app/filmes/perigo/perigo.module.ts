import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerigoPageRoutingModule } from './perigo-routing.module';

import { PerigoPage } from './perigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerigoPageRoutingModule
  ],
  declarations: [PerigoPage]
})
export class PerigoPageModule {}
