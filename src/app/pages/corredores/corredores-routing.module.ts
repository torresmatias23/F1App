import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorredoresPage } from './corredores.page';

const routes: Routes = [
  {
    path: '',
    component: CorredoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorredoresPageRoutingModule {}
