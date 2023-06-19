import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpregisterPage } from './helpregister.page';

const routes: Routes = [
  {
    path: '',
    component: HelpregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpregisterPageRoutingModule {}
