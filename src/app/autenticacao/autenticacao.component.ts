import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

      usuario: Usuario = {
        userId: "", 
        password: "",
        tipo: "",
        codUsuario: "",
        nome: "",
        genero: "",
        cpfCpnj: "",
        telefone: "",
        dataNascimento:"",
        email: "",
        cep: "",
        endereco: "",
        cidade: "",
        bairro: "",
        uf: "",
        complemento: "",
        alterarSenha: "",
    }
    usuarioServer: Usuario = {
      userId: "", 
      password: "",
      tipo: "",
      codUsuario: "",
      nome: "",
      genero: "",
      cpfCpnj: "",
      telefone: "",
      dataNascimento:"",
      email: "",
      cep: "",
      endereco: "",
      cidade: "",
      bairro: "",
      uf: "",
      complemento: "",
      alterarSenha: "",
    }

  constructor(private usuarioService: UsuarioService, private router: Router ){}

  ngOnInit(): void {
    
  }

    spinner: boolean = false
    msn?: string = ""
    contTentativa: number = 0

    class: string = "";


    public login(){

    this.spinner = true;
    this.usuarioService.getUsuario().subscribe((user) => (this.usuarioServer = user[0]))
    console.log(this.usuarioService);

    setTimeout(() => {
        this.spinner = false;

    if (this.contTentativa <= 3) {
    
      
    if (this.usuario.userId ==  "XPTO-21" && this.usuario.password == "Trocar@123") {
          this.msn = "Logado!"
          this.class = "clGreen"
          localStorage['token'] = "true"                  
          this.router.navigate(['/usuario']);        
      
        } else if(this.usuario.userId ==  "admin" && this.usuario.password == "admin123"){
          this.msn = "Logado!"
          this.class = "clGreen"   
          localStorage['token'] = "adminOn"                
          this.router.navigate(['/administrativo']);
          
          } else if (this.usuario.userId !=  "XPTO-21" && this.usuario.password == "Trocar@123") {
            this.msn = "Acesso negado, usuário incorreto"
            this.class = "clRed"       
            } 
                else if (this.usuario.userId ==  "XPTO-21" && this.usuario.password != "Trocar@123") {
                  this.msn = "Acesso negado, senha incorreta"
                  this.class = "clRed"
                }

                else if (this.usuario.userId !==  "XPTO-21" && this.usuario.password != "Trocar@123") {
                    this.msn = "Acesso negado, usuário ou senha incorreta"
                    this.class = "clRed"
                    }
                
                    else  if (this.contTentativa >= 2 && this.usuario.userId !=  "XPTO-21" && this.usuario.password != "Trocar@123" ) { 
                        this.msn = "Usuário Bloqueado!" 
                        this.class = "clRed"
                    }
                
                    this.contTentativa++
                }
            
            }, 1000); 
}
}