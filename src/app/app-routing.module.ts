import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'escuderias',
    loadChildren: () => import('./pages/escuderias/escuderias.module').then( m => m.EscuderiasPageModule)
  },
  {
    path: 'corredores',
    loadChildren: () => import('./pages/corredores/corredores.module').then( m => m.CorredoresPageModule)
  },
  {
    path: 'detalle-corredor/:nombre',
    loadChildren: () => import('./pages/detalle-corredor/detalle-corredor.module').then( m => m.DetalleCorredorPageModule)
  },
  {
    path: 'detalle-escuderia/:nombre',
    loadChildren: () => import('./pages/detalle-escuderia/detalle-escuderia.module').then( m => m.DetalleEscuderiaPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'usuario-dashboard',
    loadChildren: () => import('./pages/usuario/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'invitado-dashboard',
    loadChildren: () => import('./pages/invitado/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}