import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Corredores } from 'src/app/interface/corredores';

@Component({
  selector: 'app-corredores',
  templateUrl: './corredores.page.html',
  styleUrls: ['./corredores.page.scss'],
})
export class CorredoresPage implements OnInit {
  corredores: Corredores[] = [
    { nombre: 'Max', apellido: 'Verstappen', escuderia: 'RedBull', imagen: 'assets/corredores/verstappen.jpg', descripcion: 'Piloto estrella de RedBull.' },
    { nombre: 'Sergio', apellido: 'Perez', escuderia: 'RedBull', imagen: 'assets/corredores/perez.jpg', descripcion: 'Compañero de Verstappen en RedBull.' },
    { nombre: 'Lando', apellido: 'Norris', escuderia: 'Mclaren', imagen: 'assets/corredores/norris.jpg', descripcion: 'Promesa de Mclaren.' },
    { nombre: 'Oscar', apellido: 'Piastri', escuderia: 'Mclaren', imagen: 'assets/corredores/piastri.jpg', descripcion: 'Novato prometedor en Mclaren.' },
    { nombre: 'Charles', apellido: 'Leclerc', escuderia: 'Ferrari', imagen: 'assets/corredores/leclerc.jpg', descripcion: 'Estrella de Ferrari.' },
    { nombre: 'Carlos', apellido: 'Sainz', escuderia: 'Ferrari', imagen: 'assets/corredores/sainz.jpg', descripcion: 'Compañero de Leclerc en Ferrari.' },
    { nombre: 'Lewis', apellido: 'Hamilton', escuderia: 'Mercedes', imagen: 'assets/corredores/hamilton.jpg', descripcion: 'Líder de Mercedes y campeón mundial.' },
    { nombre: 'George', apellido: 'Russell', escuderia: 'Mercedes', imagen: 'assets/corredores/russell.jpg', descripcion: 'Compañero de Hamilton en Mercedes.' },
    { nombre: 'Fernando', apellido: 'Alonso', escuderia: 'Aston Martin', imagen: 'assets/corredores/alonso.jpg', descripcion: 'Veterano de Aston Martin.' },
    { nombre: 'Lance', apellido: 'Stroll', escuderia: 'Aston Martin', imagen: 'assets/corredores/stroll.jpg', descripcion: 'Joven piloto de Aston Martin.' },
    { nombre: 'Yuki', apellido: 'Tsunoda', escuderia: 'RB', imagen: 'assets/corredores/tsunoda.jpg', descripcion: 'Piloto japonés de RB.' },
    { nombre: 'Daniel', apellido: 'Ricciardo', escuderia: 'RB', imagen: 'assets/corredores/ricciardo.jpg', descripcion: 'Regresa a RB para esta temporada.' },
    { nombre: 'Nico', apellido: 'Hulkenberg', escuderia: 'Haas', imagen: 'assets/corredores/hulkenberg.jpg', descripcion: 'Experimentado piloto de Haas.' },
    { nombre: 'Kevin', apellido: 'Magnussen', escuderia: 'Haas', imagen: 'assets/corredores/magnussen.jpg', descripcion: 'Compañero de Hulkenberg en Haas.' },
    { nombre: 'Pierre', apellido: 'Gasly', escuderia: 'Alpine', imagen: 'assets/corredores/gasly.jpg', descripcion: 'Joven talento de Alpine.' },
    { nombre: 'Esteban', apellido: 'Ocon', escuderia: 'Alpine', imagen: 'assets/corredores/ocon.jpg', descripcion: 'Compañero de Gasly en Alpine.' },
    { nombre: 'Alexander', apellido: 'Albon', escuderia: 'Williams', imagen: 'assets/corredores/albon.jpg', descripcion: 'Piloto en ascenso de Williams.' },
    { nombre: 'Logan', apellido: 'Sargeant', escuderia: 'Williams', imagen: 'assets/corredores/sargeant.jpg', descripcion: 'Novato de Williams.' },
    { nombre: 'Valtteri', apellido: 'Bottas', escuderia: 'Kick Sauber', imagen: 'assets/corredores/bottas.jpg', descripcion: 'Veterano piloto de Kick Sauber.' },
    { nombre: 'Zhou', apellido: 'Guanyu', escuderia: 'Kick Sauber', imagen: 'assets/corredores/zhou.jpg', descripcion: 'Compañero de Bottas en Kick Sauber.' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleCorredor(corredor: Corredores) {
    this.router.navigate(['/detalle-corredor', corredor.nombre]);
  }
}
