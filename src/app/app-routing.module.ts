import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component';
import { CorridaComponent } from './corrida/corrida.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CaronaComponent } from './carona/carona.component';
import { ListaDeCaronasComponent } from './lista-de-caronas/lista-de-caronas.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'corrida', component: CorridaComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'carona', component: CaronaComponent },
    { path: 'lista-de-caronas', component: ListaDeCaronasComponent },
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}