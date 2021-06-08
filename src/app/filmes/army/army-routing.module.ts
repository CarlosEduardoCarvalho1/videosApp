import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmyPage } from './army.page';

const routes: Routes = [
  {
    path: '',
    component: ArmyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmyPageRoutingModule {}
