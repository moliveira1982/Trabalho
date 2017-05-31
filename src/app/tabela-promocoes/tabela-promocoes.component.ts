import { Component, OnInit } from '@angular/core';
import { Promocao } from "app/promocao";
import { CrudPromocoesService } from "app/crud-promocoes.service";

@Component({
  selector: 'app-tabela-promocoes',
  templateUrl: './tabela-promocoes.component.html',
  styleUrls: ['./tabela-promocoes.component.css']
})
export class TabelaPromocoesComponent implements OnInit {
  titulo = "Tabela de Promocões";
  promocoes:Promocao[]=[];
  
  constructor(private service:CrudPromocoesService) { }

  ngOnInit() {
    this.promocoes = this.service.getPromocoes();
  }

  remover(promocao:Promocao){
    this.service.removerPromocao(promocao);
  }
}
