import { Component, OnInit } from '@angular/core';
import { Cliente } from "app/cliente";
import { CrudClientesService } from "app/crud-clientes.service";

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {
  titulo = 'Lista de Clientes';
  clientes:Cliente[]=[];  
  constructor(private service:CrudClientesService) { }
  
  ngOnInit() {
    this.clientes = this.service.getClientes();
  }

  remover(cliente:Cliente){
    this.service.removerCliente(cliente);
  }

}
