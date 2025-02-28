import { Veiculo } from "../interface/Veiculo";

export class GerenciadorVeiculos<T extends Veiculo> {

    private veiculos: T[] = [];

   listarVeiculos():T[]{
        return this.veiculos;
    }
    addVeiculos(veiculo:T){
        this.veiculos.push(veiculo);
    }
    removeVeiculos(modelo: string):void{
        this.veiculos = this.veiculos.filter(v => v.modelo !== modelo);
    }
}