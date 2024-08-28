import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuderiasPage } from './escuderias.page';

const routes: Routes = [
  {
    path: '',
    component: EscuderiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuderiasPageRoutingModule {}
