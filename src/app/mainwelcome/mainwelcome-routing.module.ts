import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainwelcomePage } from './mainwelcome.page';

const routes: Routes = [
  {
    path: '',
    component: MainwelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainwelcomePageRoutingModule {}
