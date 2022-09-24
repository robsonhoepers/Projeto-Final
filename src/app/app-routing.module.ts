import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';

import { AuthGuard } from './services/auth/auth.guard';
import { ConfirmacaoidadeComponent } from './pages/confirmacaoidade/confirmacaoidade.component';
import { TelaprincipalComponent } from './pages/telaprincipal/telaprincipal.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastroprodutosComponent } from './pages/cadastroprodutos/cadastroprodutos.component';
import { CadastrousuarioComponent } from './pages/cadastrousuario/cadastrousuario.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CarrinhocompraComponent } from './pages/carrinhocompra/carrinhocompra.component';
import { FinalizarcompraComponent } from './pages/finalizarcompra/finalizarcompra.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { DadosusuarioComponent } from './pages/dadosusuario/dadosusuario.component';
import { AdministrativoComponent } from './pages/administrativo/administrativo.component';
import { RelatoriocompraComponent } from './pages/relatoriocompra/relatoriocompra.component';
import { GinComponent } from './pages/gin/gin.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { CachacaComponent } from './pages/cachaca/cachaca.component';
import { VodkaComponent } from './pages/vodka/vodka.component';
import { DadosempresaComponent } from './pages/dadosempresa/dadosempresa.component';

import { KitsComponent } from './pages/kits/kits.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutoscadastradosComponent } from './pages/produtoscadastrados/produtoscadastrados.component';


const routes: Routes = [
  {path: '', component: TelaprincipalComponent},
  {path: 'idade', component: ConfirmacaoidadeComponent},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'gin', component: GinComponent},
  {path: 'cervejas', component: CervejaComponent},
  {path: 'cachacas', component: CachacaComponent},
  {path: 'vodka', component: VodkaComponent},
  {path: 'kits', component: KitsComponent},
  {path: 'carrinhocompra', component: CarrinhocompraComponent},
  {path: 'finalizarcompra', component: FinalizarcompraComponent},
  {path: 'dadosusuario', component: DadosusuarioComponent},
  {path: 'administrativo', component: AdministrativoComponent},
  {path: 'cadastrousuario', component: CadastrousuarioComponent},
  {path: 'cadastroproduto', component: CadastroprodutosComponent},
  {path: 'produtoscadastrados', component: ProdutoscadastradosComponent},
  {path: 'dadosempresa', component: DadosempresaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'relatoriocompras', component: RelatoriocompraComponent},
  {path: '**', component: Erro404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }