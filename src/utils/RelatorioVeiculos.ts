import { Veiculo } from "../interface/Veiculo";

export function gerarRelatorio(veiculos: Veiculo[]): string{
    if(veiculos.length === 0){
        return "Nenhum veículo cadastrado";
    }
    return veiculos.map(v => `modelo: ${v.modelo}, marca: ${v.marca} do ano: ${v.ano}`).join("\n");
}