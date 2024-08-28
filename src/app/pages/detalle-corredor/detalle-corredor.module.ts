import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCorredorPageRoutingModule } from './detalle-corredor-routing.module';

import { DetalleCorredorPage } from './detalle-corredor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCorredorPageRoutingModule
  ],
  declarations: [DetalleCorredorPage]
})
export class DetalleCorredorPageModule {}
