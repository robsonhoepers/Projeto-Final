import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmacaoidadeComponent } from './pages/confirmacaoidade/confirmacaoidade.component';
import { TelaprincipalComponent } from './pages/telaprincipal/telaprincipal.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CadastroprodutosComponent } from './pages/cadastroprodutos/cadastroprodutos.component';
import { CadastrousuarioComponent } from './pages/cadastrousuario/cadastrousuario.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CarrinhocompraComponent } from './pages/carrinhocompra/carrinhocompra.component';
import { FinalizarcompraComponent } from './pages/finalizarcompra/finalizarcompra.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { DadosusuarioComponent } from './pages/dadosusuario/dadosusuario.component';
import { AdministrativoComponent } from './pages/administrativo/administrativo.component';
import { RelatoriocompraComponent } from './pages/relatoriocompra/relatoriocompra.component';
import { AuthGuard } from './services/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmacaoidadeComponent,
    TelaprincipalComponent,
    CategoriasComponent,
    ProdutosComponent,
    CadastroprodutosComponent,
    CadastrousuarioComponent,
    AutenticacaoComponent,
    CabecalhoComponent,
    RodapeComponent,
    CarrinhocompraComponent,
    FinalizarcompraComponent,
    Erro404Component,
    DadosusuarioComponent,
    AdministrativoComponent,
    RelatoriocompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
