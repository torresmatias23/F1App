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
  constructor(private router: Router,private loadingController: LoadingController,private alertController : AlertController, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      pass: ['',[Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit() {
  }
  async login(){
    const loading = this.loadingController.create({
      message: 'Cargando.....',
      duration: 2000
    })
    const alert = this.alertController.create({
      header: 'Acceso denegado',
      message: 'Usuario o contraseña incorrectas!',
      buttons:['OK']
    })

    

    const email= this.emailValue;
    const pass= this.passValue;
    if (email === 'admin@admin.cl' && pass ==='admin123') {
      localStorage.setItem('usuarioLogin',email);
      (await loading).present();
      this.router.navigate(['home']);
    } else {
      (await alert).present();  
      this.emailValue='';
      this.passValue='';
    }

  }
  
}