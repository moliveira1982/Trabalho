import { Component, OnInit } from '@angular/core';
import { Cliente } from "app/cliente";
import { CrudClientesService } from "app/crud-clientes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {
  titulo = "Cadastro de Clientes";
  cliente: Cliente;
  codigo: number;

  constructor(private service:CrudClientesService,
              private router:Router,
              private rota:ActivatedRoute) { }
  
  ngOnInit() {
    this.cliente = this.rota.snapshot.params['cod'];

    if (isNaN(this.codigo)) {
      this.cliente = new Cliente();
    }else{
      this.cliente = Object.assign({},
        this.service.getClientePorCodigo(this.codigo));
    }
  }

  salvarCliente(){
    if (isNaN(this.codigo)) {
      this.service.adicionarCliente(this.cliente);  
      this.cliente = new Cliente();
    }else{
      this.service.atualizaCliente(this.codigo, this.cliente);
    }
    this.router.navigate(['/lista']);
  }

  cancelar(){ this.router.navigate(['/lista']); 
  }
}
