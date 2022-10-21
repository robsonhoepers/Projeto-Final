import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/interfaces/endereco';
import { Usuario } from 'src/app/interfaces/usuario';
import { CadastroendService } from 'src/app/services/cadastroend.service';
import { CadastroUsuarioService } from '../../services/cadastrousuario.service';


@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent {

  formUsuario: FormGroup;
  
 
  endereco: Endereco;
  usuario: Usuario;
  end!: Endereco;


  constructor(private formBuilder: FormBuilder, private router: Router ,
              private cadastroUsuarioService: CadastroUsuarioService,
              private cadastroEndService : CadastroendService) {

      this.formUsuario = this.formBuilder.group({
        userId: ['', [Validators.required]], 
        password: ['', [Validators.required]],
        confirmPass: ['', [Validators.required]],
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
        dataNasc: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        cep: ['', [Validators.required]],
        rua: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        uf: ['', [Validators.required]],
        complemento: ['']
      });

      this.endereco = {

        id: 0,
        cep: '',
        rua: '',
        cidade: '',
        bairro: '',
        uf: '',
        complemento:'',
        
      };

      this.usuario = {

          userId: '',
          password: '',
          confirmPass: '',
          nome: '',
          cpf: '',
          telefone: '',
          dataNasc: '',
          email: '',
          endId: 0

         };

        


    }
  
  cadastrar(): void {
    
    this.endereco.cep = this.formUsuario.get('cep')?.value;
    this.endereco.rua = this.formUsuario.get('rua')?.value;
    this.endereco.cidade = this.formUsuario.get('cidade')?.value;
    this.endereco.bairro = this.formUsuario.get('bairro')?.value;
    this.endereco.uf = this.formUsuario.get('uf')?.value;
    this.endereco.complemento = this.formUsuario.get('complemento')?.value;
    console.log(this.endereco);
    //chama cadastro de endereco
    this.cadastroEndService.cadastroEnd(this.endereco).subscribe((end) => {
      console.log(end);
     
      this.usuario.endId = end.id
      this.usuario.userId = this.formUsuario.get('userId')?.value;
      this.usuario.password = this.formUsuario.get('password')?.value;
      this.usuario.confirmPass = this.formUsuario.get('confirmPass')?.value;
      this.usuario.nome = this.formUsuario.get('nome')?.value;
      this.usuario.cpf = this.formUsuario.get('cpf')?.value;
      this.usuario.telefone = this.formUsuario.get('telefone')?.value;
      this.usuario.dataNasc = this.formUsuario.get('dataNasc')?.value;
      this.usuario.email = this.formUsuario.get('email')?.value;

      //chama cadastro do usuario
      this.cadastroUsuarioService.cadastrarUsuario(this.usuario).subscribe(() => {
        console.log(this.usuario);
        
        this.cadastroUsuarioService.showAlert();
        this.formUsuario.reset();
        this.router.navigate(['/'])
        ;
      });
    });
    
    
    
  };


  cancelar(): void{
    this.router.navigate(['/'])
   };

}
