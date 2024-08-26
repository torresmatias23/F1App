import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escuderias',
  templateUrl: './escuderias.page.html',
  styleUrls: ['./escuderias.page.scss'],
})
export class EscuderiasPage implements OnInit {
  escuderias=[
    {nombre: 'RedBull', imagen:'assets/escuderias/red-bull-racing.jpg'},
    {nombre: 'Mclaren', imagen:'assets/escuderias/mclaren.jpg'},
    {nombre: 'Ferrari', imagen:'assets/escuderias/ferrari.jpg'},
    {nombre: 'Mercedes', imagen:'assets/escuderias/mercedes.jpg'},
    {nombre: 'Aston martin', imagen:'assets/escuderias/aston-martin.jpg'},
    {nombre: 'RB', imagen:'assets/escuderias/rb.jpg'},
    {nombre: 'Haas', imagen:'assets/escuderias/haas.jpg'},
    {nombre: 'Alpine', imagen:'assets/escuderias/alpine.jpg'},
    {nombre: 'Williams', imagen:'assets/escuderias/williams.jpg'},
    {nombre: 'Kick sauber', imagen:'assets/escuderias/kick-sauber.jpg'},
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleEquipo(aux: any) {
    this.router.navigate(['/detalle-escuderia', aux.nombre]);
  }
}
