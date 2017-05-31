import { Component, OnInit } from '@angular/core';
import { Promocao } from "app/promocao";
import { CrudPromocoesService } from "app/crud-promocoes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-promocoes',
  templateUrl: './form-promocoes.component.html',
  styleUrls: ['./form-promocoes.component.css']
})
export class FormPromocoesComponent implements OnInit {
  titulo = "Cadastro de Promoções";
  promocao:Promocao;
  codigo: number;

  constructor( private service:CrudPromocoesService,
    private router:Router,
    private rota:ActivatedRoute) { }

  ngOnInit() { 
    this.codigo = this.rota.snapshot.params['cod'];
    
    if (isNaN(this.codigo)) {
      this.promocao = new Promocao();
    } else {
      this.promocao = Object.assign({},
        this.service.getPromocaoPorCodigo(this.codigo));
    }
 }

  salvarPromocao(){
    if (isNaN(this.codigo)) {
      this.service.adicionarPromocao(this.promocao);  
      this.promocao = new Promocao();
    } else {
      this.service.atualizarPromocao(this.codigo, this.promocao);
    }
    this.router.navigate(['/listapro']);
  }

  cancelar(){ this.router.navigate(['/listapro']); }
}
