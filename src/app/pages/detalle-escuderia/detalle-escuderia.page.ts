import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Corredores } from 'src/app/interface/corredores';

@Component({
  selector: 'app-detalle-escuderia',
  templateUrl: './detalle-escuderia.page.html',
  styleUrls: ['./detalle-escuderia.page.scss'],
})
export class DetalleEscuderiaPage implements OnInit {
  nombreEquipo?: string | null;
  escuderiaImagen: string = ''; // Imagen de la escuderia
  escuderiaDescripcion: string = ''; // Descripción de la escuderia
  corrredores =[
    {nombre: 'Max', apellido:'Verstappen', escuderia:'RedBull', imagen:'assets/corredores/verstappen.jpg', descripcion:''},
    {nombre: 'Sergio', apellido:'Perez', escuderia:'RedBull', imagen:'assets/corredores/perez.jpg', descripcion:''},
    {nombre: 'Lando', apellido:'Norris', escuderia:'Mclaren', imagen:'assets/corredores/norris.jpg', descripcion:''},
    {nombre: 'Oscar', apellido:'Piastri', escuderia:'Mclaren', imagen:'assets/corredores/piastri.jpg', descripcion:''},
    {nombre: 'Charles', apellido:'Leclerc', escuderia:'Ferrari', imagen:'assets/corredores/leclerc.jpg', descripcion:''},
    {nombre: 'Carlos', apellido:'Sainz', escuderia:'Ferrari', imagen:'assets/corredores/sainz.jpg', descripcion:''},
    {nombre: 'Lewis', apellido:'Hamilton', escuderia:'Mercedes', imagen:'assets/corredores/hamilton.jpg', descripcion:''},
    {nombre: 'George', apellido:'Russell', escuderia:'Mercedes', imagen:'assets/corredores/russell.jpg', descripcion:''},
    {nombre: 'Fernando', apellido:'Alonso', escuderia:'Aston martin', imagen:'assets/corredores/alonso.jpg', descripcion:''},
    {nombre: 'Lance', apellido:'Stroll', escuderia:'Aston martin', imagen:'assets/corredores/stroll.jpg', descripcion:''},
    {nombre: 'Yuki', apellido:'Tsunoda', escuderia:'RB', imagen:'assets/corredores/tsunoda.jpg', descripcion:''},
    {nombre: 'Daniel', apellido:'Ricciardo', escuderia:'RB', imagen:'assets/corredores/ricciardo.jpg', descripcion:''},
    {nombre: 'Nico', apellido:'hulkenberg', escuderia:'Haas', imagen:'assets/corredores/hulkenberg.jpg', descripcion:''},
    {nombre: 'Kevin', apellido:'Magnussen', escuderia:'Haas', imagen:'assets/corredores/magnussen.jpg', descripcion:''},
    {nombre: 'Pierre', apellido:'Gasly', escuderia:'Alpine', imagen:'assets/corredores/gasly.jpg', descripcion:''},
    {nombre: 'Esteban', apellido:'Ocon', escuderia:'Alpine', imagen:'assets/corredores/ocon.jpg', descripcion:''},
    {nombre: 'Alexander', apellido:'Albon', escuderia:'Williams', imagen:'assets/corredores/albon.jpg', descripcion:''},
    {nombre: 'Logan', apellido:'Sargeant', escuderia:'Williams', imagen:'assets/corredores/sargeant.jpg', descripcion:''},
    {nombre: 'Valtteri', apellido:'Bottas', escuderia:'Kick sauber', imagen:'assets/corredores/bottas.jpg', descripcion:''},
    {nombre: 'Zhou', apellido:'Guanyu', escuderia:'Kick sauber', imagen:'assets/corredores/zhou.jpg', descripcion:''}, 
  ]
  corredoresFiltrados: Corredores[]=[];
  constructor(private activateRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.nombreEquipo = this.activateRoute.snapshot.paramMap.get('nombre');
    this.filtrarJugadoresPorEscuderia();
    this.setEscuderiaInfo();
  }
  filtrarJugadoresPorEscuderia() {
    if (this.nombreEquipo) {
      this.corredoresFiltrados = this.corrredores.filter(aux => aux.escuderia === this.nombreEquipo);
  }
  }

  setEscuderiaInfo() {
    // Asignar imagen y descripción según la escudería
    if (this.nombreEquipo === 'RedBull') {
      this.escuderiaImagen = 'assets/escuderias/red-bull-racing.jpg';
      this.escuderiaDescripcion = 'Red Bull Racing es un equipo de Fórmula 1 fundado en 2005, conocido por su innovación y éxito en las carreras.';
    } else if (this.nombreEquipo === 'Mclaren') {
      this.escuderiaImagen = 'assets/escuderias/mclaren.jpg';
      this.escuderiaDescripcion = 'McLaren es uno de los equipos más históricos de la Fórmula 1, con un legado de campeonatos y tecnología avanzada.';
    } else if (this.nombreEquipo === 'Ferrari') {
      this.escuderiaImagen = 'assets/escuderias/ferrari.jpg';
      this.escuderiaDescripcion = 'Scuderia Ferrari es el equipo más antiguo y exitoso en la Fórmula 1, con una pasión inigualable por la velocidad.';
    } else if (this.nombreEquipo === 'Mercedes') {
      this.escuderiaImagen = 'assets/escuderias/mercedes.jpg';
      this.escuderiaDescripcion = 'Mercedes AMG Petronas es un equipo dominante en la Fórmula 1, conocido por su tecnología de vanguardia y campeonatos recientes.';
    } else if (this.nombreEquipo === 'Aston martin') {
      this.escuderiaImagen = 'assets/escuderias/aston-martin.jpg';
      this.escuderiaDescripcion = 'Aston Martin es un equipo de Fórmula 1 que combina lujo británico con rendimiento en la pista.';
    } else if (this.nombreEquipo === 'RB') {
      this.escuderiaImagen = 'assets/escuderias/rb.jpg';
      this.escuderiaDescripcion = 'RB es un equipo en crecimiento, comprometido con la innovación y el rendimiento en la Fórmula 1.';
    } else if (this.nombreEquipo === 'Haas') {
      this.escuderiaImagen = 'assets/escuderias/haas.jpg';
      this.escuderiaDescripcion = 'Haas F1 Team es un equipo estadounidense que busca hacer historia en la Fórmula 1 con su enfoque pragmático.';
    } else if (this.nombreEquipo === 'Alpine') {
      this.escuderiaImagen = 'assets/escuderias/alpine.jpg';
      this.escuderiaDescripcion = 'Alpine F1 Team representa el espíritu francés en la Fórmula 1, con un enfoque audaz y un legado deportivo.';
    } else if (this.nombreEquipo === 'Williams') {
      this.escuderiaImagen = 'assets/escuderias/williams.jpg';
      this.escuderiaDescripcion = 'Williams Racing es uno de los equipos legendarios en la Fórmula 1, conocido por su historia de éxitos.';
    } else if (this.nombreEquipo === 'Kick sauber') {
      this.escuderiaImagen = 'assets/escuderias/kick-sauber.jpg';
      this.escuderiaDescripcion = 'Kick Sauber es un equipo suizo que busca avanzar en la parrilla con su enfoque meticuloso y su espíritu competitivo.';
    }
  }
  verDetalleCorredor(nombre: string) {
    this.router.navigate(['/detalle-corredor', nombre]);
  }
}
