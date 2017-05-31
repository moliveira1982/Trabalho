import { Injectable } from '@angular/core';
import { Cliente } from "app/cliente";

@Injectable()
export class CrudClientesService {
  clientes: Cliente[] = [
    { codigo:1, nome:"Marcos", data:"20/04/2000"},
    { codigo:2, nome:"Ana", data:"10/05/2010"},
    { codigo:3, nome:"João", data:"10/05/2011"},
    { codigo:4, nome:"Fulano", data:"10/05/2012"}
  ];
  autoIncrement:number=5;

  constructor() { }
  
  getClientes(){
    return this.clientes;
  }

  adicionarCliente(cliente:Cliente){
    cliente.codigo=this.autoIncrement++;
    this.clientes.push(cliente);
  }

  getClientePorCodigo(codigo:number){
    return(this.clientes.find(cliente => cliente.codigo==codigo));  
  }

  removerCliente(cliente:Cliente){
    let indice = this.clientes.indexOf(cliente,0);
    if(indice > -1){
      this.clientes.splice(indice, 1);
    }
  }

  atualizaCliente(codigo:number, cliente:Cliente){
    let indice = this.clientes.indexOf(this.getClientePorCodigo(codigo), 0);
    this.clientes[indice] = cliente;
  }

}
