import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuderiasPageRoutingModule } from './escuderias-routing.module';

import { EscuderiasPage } from './escuderias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuderiasPageRoutingModule
  ],
  declarations: [EscuderiasPage]
})
export class EscuderiasPageModule {}
