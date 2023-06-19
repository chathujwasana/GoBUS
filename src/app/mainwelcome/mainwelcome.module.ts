import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainwelcomePageRoutingModule } from './mainwelcome-routing.module';

import { MainwelcomePage } from './mainwelcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainwelcomePageRoutingModule
  ],
  declarations: [MainwelcomePage]
})
export class MainwelcomePageModule {}
