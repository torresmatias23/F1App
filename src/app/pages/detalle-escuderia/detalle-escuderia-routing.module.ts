import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEscuderiaPage } from './detalle-escuderia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEscuderiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEscuderiaPageRoutingModule {}
