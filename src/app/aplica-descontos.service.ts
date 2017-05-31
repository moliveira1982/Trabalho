import { Injectable } from '@angular/core';
import { Desconto } from "app/desconto";

@Injectable()
export class AplicaDescontosService {
  descontos: Desconto[]=[
    { codigo:1, cod_cliente: 1, cod_promocao: 1, descricao: "Desconto no App", data:"10/10/2000"},
    { codigo:2, cod_cliente: 2, cod_promocao: 3, descricao: "Desconto na loja", data:"10/09/2010"}
  ]
  autoIncrement:number=3;

  constructor() { }

  getDescontos(){
    return this.descontos;
  }

  adicionarDesconto(desconto:Desconto){
    desconto.codigo=this.autoIncrement++;
    this.descontos.push(desconto);
  }

  getDescontoPorCodigo(codigo:number){
    return(this.descontos.find( desconto => desconto.codigo==codigo )); 
  }

  removerDesconto(desconto:Desconto){
    let indice = this.descontos.indexOf(desconto, 0);
    if (indice > -1) {
      this.descontos.splice(indice, 1);
    }
  }

  atualizarDesconto(codigo:number, desconto:Desconto){
    let indice = this.descontos.indexOf(this.getDescontoPorCodigo(codigo), 0);
    this.descontos[indice] = desconto;
  }

}
