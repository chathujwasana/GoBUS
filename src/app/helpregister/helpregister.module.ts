import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelpregisterPageRoutingModule } from './helpregister-routing.module';

import { HelpregisterPage } from './helpregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelpregisterPageRoutingModule
  ],
  declarations: [HelpregisterPage]
})
export class HelpregisterPageModule {}
