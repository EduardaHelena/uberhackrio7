import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  itens : any[] = [
    {Titulo: 'WeWork'},
    {Titulo: 'Teatro Municipal'},
    {Titulo: 'Largo da Carioca'},
    {Titulo: 'Castelo'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
