import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { UsuarioServer } from '../interfaces/usuarioServer';
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
        cpfCpnj: "",
        telefone: "",
        dataNascimento:"",
        email: "",
        endId: 0
    };

    usuarioServer: UsuarioServer = {
      userId: "", 
      password: "",
      confirmPass:"",
      nome: "",
      cpfCpnj: "",
      telefone: "",
      dataNascimento:"",
      email: "",
      endId: 0
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
    this.usuarioService.getUsuarios().subscribe(() => (this.usuarioServer))
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