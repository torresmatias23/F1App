import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEscuderiaPageRoutingModule } from './detalle-escuderia-routing.module';

import { DetalleEscuderiaPage } from './detalle-escuderia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEscuderiaPageRoutingModule
  ],
  declarations: [DetalleEscuderiaPage]
})
export class DetalleEscuderiaPageModule {}
