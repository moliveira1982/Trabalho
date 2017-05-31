import { Component, OnInit } from '@angular/core';
import { Desconto } from "app/desconto";
import { AplicaDescontosService } from "app/aplica-descontos.service";

@Component({
  selector: 'app-tabela-descontos',
  templateUrl: './tabela-descontos.component.html',
  styleUrls: ['./tabela-descontos.component.css']
})
export class TabelaDescontosComponent implements OnInit {
  titulo = "Tabela de Descontos";
  desconto:Desconto[]=[];
  
  constructor(private service:AplicaDescontosService) { }

  ngOnInit() {
    this.desconto = this.service.getDescontos();
  }

  remover(desconto:Desconto){
    this.service.removerDesconto(desconto);
  }
}
