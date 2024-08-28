import { Component } from '@angular/core';
import { Page } from './interface/pages';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: Page[]= [];
  public tipoUsuario?:string;
  public emailUsuario?:string;
  
  constructor() {}

  ngOnInit(){
    const usuarioLogin = localStorage.getItem('usuarioLogin');
    if (usuarioLogin) {
        const user = JSON.parse(usuarioLogin);   
        this.tipoUsuario = user.tipo;   
        this.emailUsuario = user.email;  
        this.configSideMenu(); 
    }else{

    }
  }
  configSideMenu(){
    if (this.tipoUsuario === 'admin') {
      this.appPages=[
        {title:'Dashboard',url:'/admin-dashboard',icon:'home'},
        {title:'administrar usuarios',url:'/admin-users',icon:'people'},
        {title:'Cerrar Sesion',url:'/login',icon:'log-out'},
      ]
    } else if (this.tipoUsuario==='usuario') {
      this.appPages=[
        {title:'Dashboard',url:'/usuario-dashboard',icon:'home'},
        {title:'Perfil',url:'/perfil',icon:'settings'},
        {title:'Cerrar Sesion',url:'/login',icon:'log-out'},
      ]
    } else {
      this.appPages=[
        {title:'Login',url:'/login',icon:'log-out'},
        {title:'Registrarse',url:'/register',icon:'log-out'},
      ]
    }
    }
}
