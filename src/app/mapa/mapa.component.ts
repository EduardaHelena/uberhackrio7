import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  itens : any[] = [
    {Titulo: 'Barra da Tijuca'},
    {Titulo: 'Copacabana'},
    {Titulo: 'Estácio'},
    {Titulo: 'Botafogo'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
