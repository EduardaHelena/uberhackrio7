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
    {Titulo: 'teste4'},
    {Titulo: 'teste5'},
    {Titulo: 'teste6'},
    {Titulo: 'teste7'},
    {Titulo: 'teste8'},
    {Titulo: 'teste9'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
