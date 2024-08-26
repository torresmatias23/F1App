import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCorredorPage } from './detalle-corredor.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCorredorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCorredorPageRoutingModule {}
