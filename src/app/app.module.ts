import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaDeCaronasComponent } from './lista-de-caronas/lista-de-caronas.component';
import { CaronaComponent } from './carona/carona.component';
import { CorridaComponent } from './corrida/corrida.component';
import { MapaComponent } from './mapa/mapa.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    ListaDeCaronasComponent,
    CaronaComponent,
    CorridaComponent,
    MapaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }