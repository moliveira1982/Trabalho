import { Injectable } from '@angular/core';
import { Promocao } from "app/promocao";

@Injectable()
export class CrudPromocoesService {
  promocoes: Promocao[]=[
    { codigo:1, nome:"Desconto Natal", desconto: 10},
    { codigo:2, nome:"Pascoa", desconto: 50},
    { codigo:3, nome:"Fidelidade", desconto:100}
  ];
  autoIncrement:number=4;

  constructor() { }

  getPromocoes(){
    return this.promocoes;
  }

  adicionarPromocao(promocao:Promocao){
    promocao.codigo=this.autoIncrement++;
    this.promocoes.push(promocao);
  }

  getPromocaoPorCodigo(codigo:number){
    return(this.promocoes.find( promocao => promocao.codigo==codigo )); 
  }

  removerPromocao(promocao:Promocao){
    let indice = this.promocoes.indexOf(promocao, 0);
    if (indice > -1) {
      this.promocoes.splice(indice, 1);
    }
  }

  atualizarPromocao(codigo:number, promocao:Promocao){
    let indice = this.promocoes.indexOf(this.getPromocaoPorCodigo(codigo), 0);
    this.promocoes[indice] = promocao;
  }

}
