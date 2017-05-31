import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { CrudClientesService } from "app/crud-clientes.service";
import { TabelaPromocoesComponent } from './tabela-promocoes/tabela-promocoes.component';
import { FormPromocoesComponent } from './form-promocoes/form-promocoes.component';
import { CrudPromocoesService } from "app/crud-promocoes.service";
import { TabelaDescontosComponent } from './tabela-descontos/tabela-descontos.component';
import { FormDescontosComponent } from './form-descontos/form-descontos.component';
import { AplicaDescontosService } from "app/aplica-descontos.service";

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: TabelaClientesComponent },
  { path: 'novo', component: FormClientesComponent },
  { path: 'edicao/:cod', component: FormClientesComponent },

  { path: 'listapro', component: TabelaPromocoesComponent },
  { path: 'edicaopro/:cod', component: FormPromocoesComponent },
  { path: 'novopro', component: FormPromocoesComponent },

  { path: 'desc', component: TabelaDescontosComponent},
  { path: 'edicaodesc', component: FormDescontosComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaClientesComponent,
    FormClientesComponent,
    TabelaPromocoesComponent,
    FormPromocoesComponent,
    TabelaDescontosComponent,
    FormDescontosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudClientesService,
              CrudPromocoesService,
              AplicaDescontosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
