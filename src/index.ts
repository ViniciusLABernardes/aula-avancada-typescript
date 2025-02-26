import { GerenciadorVeiculos } from './classes/GerenciadorVeiculos';
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

const meuCarro: Carro = {
    modelo: "HB20",
    marca:"Hyundai",
    ano:2023,
    portas:4,
    acelerar: () => "O carro está acelerando!"
}
const minhaMoto: Moto ={
    modelo:"Xre",
    marca:"Honda",
    ano: 2018,
    cilindradas:500,
    acelerar:()=> "A moto esta acelerando"
}
console.log("Carro: ", meuCarro);
meuCarro.acelerar();
console.log("Moto: ", minhaMoto);
minhaMoto.acelerar();

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

gerenciadorCarros.addVeiculos(meuCarro);
console.log(gerenciadorCarros.listarVeiculos);
gerenciadorCarros.removeVeiculos("HB20");
console.log(gerenciadorCarros.listarVeiculos);


gerenciadorMotos.addVeiculos(minhaMoto);
console.log(gerenciadorMotos.listarVeiculos);
gerenciadorMotos.removeVeiculos("Xre");
console.log(gerenciadorMotos.listarVeiculos);