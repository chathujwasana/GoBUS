import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidesPageRoutingModule } from './rides-routing.module';

import { RidesPage } from './rides.page';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidesPageRoutingModule
  ],
  declarations: [RidesPage,MapComponent]
})
export class RidesPageModule {}
