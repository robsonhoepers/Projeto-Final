import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { UsuarioServer } from '../interfaces/usuarioServer';
import { AutenticacaoService } from '../services/autenticacao.service';
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
        confirmPass: "",
        nome: "",
        cpf: "",
        telefone: "",
        dataNasc:"",
        email: "",
        endId: 0
    };

    usuarioServer: UsuarioServer = {
      userId: "", 
      password: "",
      confirmPass:"",
      nome: "",
      cpf: "",
      telefone: "",
      dataNasc:"",
      email: "",
      endId: 0
    }
  

  constructor(private autenticasaoService: AutenticacaoService, private router: Router ){}

  ngOnInit(): void {

  }

    spinner: boolean = false
    msn?: string = ""
    contTentativa: number = 0

    class: string = "";


    public login(){
    
  
    const userId = this.usuario.userId
    console.log(userId);
    this.spinner = true;
    this.autenticasaoService.readById(userId).subscribe((usuario) => {
    this.usuarioServer = usuario
    this.testarUser()
    console.log(this.usuarioServer);

  });

    setTimeout(() => {
      this.spinner = false
    }, 3000);
  }
    
    public testarUser() { 

    if (this.contTentativa <= 3) {
    
      
      
      if(this.usuario.userId ==  "admin" && this.usuario.password == "admin123"){
        this.msn = "Logado!"
        this.class = "clGreen"   
        localStorage['token'] = "true"                
        this.router.navigate(['/administrativo']);
        
      } else if (this.usuario.userId == this.usuarioServer.userId && this.usuario.password == this.usuarioServer.password) {
        this.msn = "Logado!"
        this.class = "clGreen"
        localStorage['token'] = "true"                  
        this.router.navigate(['/usuario']);
          
          } else if (this.usuario.userId !=  this.usuarioServer.userId && this.usuario.password == this.usuarioServer.password) {
            this.msn = "Acesso negado, usuário incorreto"
            this.class = "clRed"       
            } 
                else if (this.usuario.userId ==  this.usuarioServer.userId && this.usuario.password != this.usuarioServer.password) {
                  this.msn = "Acesso negado, senha incorreta"
                  this.class = "clRed"
                }

                else if (this.usuario.userId !==  this.usuarioServer.userId && this.usuario.password != this.usuarioServer.password) {
                    this.msn = "Acesso negado, usuário ou senha incorreta"
                    this.class = "clRed"
                    }
                
                    else  if (this.contTentativa >= 2 && this.usuario.userId !=  this.usuarioServer.userId && this.usuario.password != this.usuarioServer.password ) { 
                        this.msn = "Usuário Bloqueado!" 
                        this.class = "clRed"
                    }
                
                    this.contTentativa++
                }
            
            };
          
}
 
