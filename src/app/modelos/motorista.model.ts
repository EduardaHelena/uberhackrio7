import { Veiculo } from './veiculo.model';
import { Corrida } from './corrida.model';
import { Usuario } from './usuario.model';

export class Motorista extends Usuario {
    veiculo: Veiculo;
    cnh: number;
    corrida?: Corrida;
}