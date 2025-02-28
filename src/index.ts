import { EstoqueVeiculos } from './classes/EstoqueVeiculos';
import { GerenciadorVeiculos } from './classes/GerenciadorVeiculos';
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { Veiculo } from './interface/Veiculo';
import { filtrarPorAno, filtrarPorMarca, filtrarPorModelo } from './utils/FiltroVeiculos';

const meuCarro: Carro = {
    modelo: "HB20",
    marca:"Hyundai",
    ano:2023,
    portas:4,
   // acelerar: () => "O carro está acelerando!"
}
const minhaMoto: Moto ={
    modelo:"Xre",
    marca:"Honda",
    ano: 2018,
    cilindradas:500,
    //acelerar:()=> "A moto esta acelerando"
}
console.log("Carro: ", meuCarro);
//meuCarro.acelerar();
console.log("Moto: ", minhaMoto);
//minhaMoto.acelerar();

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

gerenciadorCarros.addVeiculos(meuCarro);
console.log(gerenciadorCarros.listarVeiculos());
gerenciadorCarros.removeVeiculos("HB20");
console.log(gerenciadorCarros.listarVeiculos());


gerenciadorMotos.addVeiculos(minhaMoto);
console.log(gerenciadorMotos.listarVeiculos());
gerenciadorMotos.removeVeiculos("Xre");
console.log(gerenciadorMotos.listarVeiculos());

const estoque = new EstoqueVeiculos();

estoque.adicionarEstoque("HB20",20);
estoque.adicionarEstoque("Civic",15);
estoque.adicionarEstoque("Xre",50);

console.log("Estoque de HB20: ", estoque.consultaEstoque("HB20"));
estoque.removerEstoque("HB20",3);
console.log("Estoque após remoção: ",estoque.consultaEstoque("HB20"));

const veiculos:Veiculo[] =[
    {modelo:"Civic", ano: 2020, marca: "Honda"},
    {modelo:"HB20", ano: 2023, marca: "Hyundai"},
    {modelo:"Sentra", ano: 2018, marca: "Nissan"}
]

console.log("Veiculos de 2020: ", filtrarPorAno(veiculos,2020));
console.log("Veiculos da marca Nissan: ",filtrarPorMarca(veiculos,"nissan"));
console.log("Veiculos do modelo hb20: ", filtrarPorModelo(veiculos,"hb20"));