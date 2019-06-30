import { Time } from '@angular/common';
import { Motorista } from './motorista.model';

export class Corrida extends Motorista{
    id: number;
    duração: Time;
    paradas?: string[];
    vagas: number;
    valorTotal: number;
    valorPassageiro: number;
}