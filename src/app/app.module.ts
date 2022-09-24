import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
import { DadosempresaComponent } from './pages/dadosempresa/dadosempresa.component';
import { GinComponent } from './pages/gin/gin.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { VodkaComponent } from './pages/vodka/vodka.component';
import { CachacaComponent } from './pages/cachaca/cachaca.component';
import { KitsComponent } from './pages/kits/kits.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CarouselModule } from './carousel/carousel.module';
import { ProdutoscadastradosComponent } from './pages/produtoscadastrados/produtoscadastrados.component';




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
    RelatoriocompraComponent,
    DadosempresaComponent,
    GinComponent,
    CervejaComponent,
    VodkaComponent,
    CachacaComponent,
    KitsComponent,
    ContatoComponent,
    ProdutoscadastradosComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CarouselModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
