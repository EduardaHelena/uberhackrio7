import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  itens : any[] = [
    {Titulo: 'teste0'},
    {Titulo: 'teste1'},
    {Titulo: 'teste2'},
    {Titulo: 'teste3'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
