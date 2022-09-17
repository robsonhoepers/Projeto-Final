import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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


const routes: Routes = [
  {path: 'administrativo', component: AdministrativoComponent},
  {path: 'idade', component: ConfirmacaoidadeComponent},
  {path: 'telaprincipal', component: TelaprincipalComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'cadastroproduto', component: CadastroprodutosComponent},
  {path: 'cadastrousuario', component: CadastrousuarioComponent},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'carrinhocompra', component: CarrinhocompraComponent},
  {path: 'finalizarcompra', component: FinalizarcompraComponent},
  {path: 'dadosusuario', component: DadosusuarioComponent},
  {path: 'relatoriocompras', component: RelatoriocompraComponent},
  {path: '**', component: Erro404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
