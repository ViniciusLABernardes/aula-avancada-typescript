import { Veiculo } from "../interface/Veiculo";

export class GerenciadorVeiculos<T>{

    private veiculos: Veiculo[] = [];

   listarVeiculos(veiculos:T[]):T[]{
        return veiculos;
    }
    addVeiculos(veiculo:Veiculo){
        this.veiculos.push(veiculo);
    }
    removeVeiculos(modelo: string):void{
        this.veiculos = this.veiculos.filter(v => v.modelo !== modelo);
    }
}