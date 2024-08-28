import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  emailValue?: string;
  passValue?: string;

  usuarios = [
    { 'email': 'admin@admin.cl', 'pass': 'admin123', 'tipo': 'admin' },
    { 'email': 'user@user.cl', 'pass': 'user123', 'tipo': 'usuario' },
    { 'email': 'invi@invi.cl', 'pass': 'invitado', 'tipo': 'invitado' },
  ];

  constructor(private router: Router, private loadingController: LoadingController, private alertController: AlertController, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  async login() {
    const loading = this.loadingController.create({
      message: 'Cargando.....',
      duration: 2000
    });
    const alert = this.alertController.create({
      header: 'Acceso denegado',
      message: 'Usuario o contraseña incorrectas!',
      buttons: ['OK']
    });

    const email = this.emailValue;
    const pass = this.passValue;

    const usuario = this.usuarios.find(aux => aux.email === email && aux.pass === pass);

    if (usuario) {
      localStorage.setItem('usuarioLogin', JSON.stringify(usuario));
      (await loading).present();

      setTimeout(async () => {
        (await loading).dismiss();

        if (usuario.tipo === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (usuario.tipo === 'usuario') {
          this.router.navigate(['/usuario-dashboard']);
        } else if (usuario.tipo === 'invitado') {
          this.router.navigate(['/invitado-dashboard']);
        }
      }, 2000);
    } else {
      (await alert).present();
      this.emailValue = '';
      this.passValue = '';
    }
  }
}