import { NgModule } from '@angular/core';
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
import { GinComponent } from './pages/gin/gin.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { CachacaComponent } from './pages/cachaca/cachaca.component';
import { VodkaComponent } from './pages/vodka/vodka.component';
import { DadosempresaComponent } from './pages/dadosempresa/dadosempresa.component';

import { KitsComponent } from './pages/kits/kits.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProdutoscadastradosComponent } from './pages/produtoscadastrados/produtoscadastrados.component';
import { GetcachacaComponent } from './pages/getcachaca/getcachaca.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ProdutoupdateComponent } from './pages/produtoupdate/produtoupdate.component';


const routes: Routes = [
  {path: 'idade', component: ConfirmacaoidadeComponent},
  {path: '', component: TelaprincipalComponent,},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'produtos/:id', component: ProdutosComponent},
  {path: 'gin', component: GinComponent},
  {path: 'cervejas', component: CervejaComponent},
  {path: 'cachacas', component: CachacaComponent},
  {path: 'vodka', component: VodkaComponent},
  {path: 'kits', component: KitsComponent},
  {path: 'carrinhocompra', component: CarrinhocompraComponent},
  {path: 'finalizarcompra', component: FinalizarcompraComponent},
  {path: 'dadosusuario', component: DadosusuarioComponent, canActivate: [AuthGuard]},
  {path: 'administrativo', component: AdministrativoComponent, canActivate: [AuthGuard]},
  {path: 'cadastrousuario', component: CadastrousuarioComponent},
  {path: 'cadastroproduto', component: CadastroprodutosComponent},
  {path: 'produtoscadastrados', component: ProdutoscadastradosComponent},
  {path: 'dadosempresa', component: DadosempresaComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'relatoriocompras', component: RelatoriocompraComponent},
  {path: 'getcachaca', component: GetcachacaComponent},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
  {path: 'cabecalho', component: CabecalhoComponent,},
  {path: 'rodape', component: RodapeComponent,},
  {path: 'produtoupdate/:id', component: ProdutoupdateComponent},
  {path: '**', component: Erro404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }