import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorredoresPageRoutingModule } from './corredores-routing.module';

import { CorredoresPage } from './corredores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorredoresPageRoutingModule
  ],
  declarations: [CorredoresPage]
})
export class CorredoresPageModule {}
