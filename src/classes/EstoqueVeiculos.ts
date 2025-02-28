import { Veiculo } from "../interface/Veiculo"

export class EstoqueVeiculos<T extends Veiculo>{
    private estoque:{
        modelo:string,
        quantidade:number
    }[] = [];

    adicionarEstoque(modelo:string,quantidade:number):void{
      const item = this.estoque.find(v => v.modelo === modelo);
        if(item){
            item.quantidade += quantidade;
        }else{
            this.estoque.push({modelo,quantidade});
        }
    }
    removerEstoque(modelo:string,quantidade:number):void{
        const item = this.estoque.find(v => v.modelo === modelo);
        if (!item){
            console.log("Veiculo não encontrado")
        }else{
            item.quantidade -= quantidade;
            if(item.quantidade <= 0){
                this.estoque = this.estoque.filter(v => v.modelo !== modelo);
            }
        }

    }

    consultaEstoque(modelo:string): number{
        const item = this.estoque.find(v => v.modelo === modelo);
        if(item){
            return item.quantidade;
        }else{
            return item.quantidade = 0;
        }
    }
}