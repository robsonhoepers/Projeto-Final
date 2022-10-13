import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from '../../services/cadastrousuario.service';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})
export class CadastrousuarioComponent {

  formUsuario: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router ,
              private cadastroUsuarioService: CadastroUsuarioService) {

      this.formUsuario = this.formBuilder.group({
        nome: ['', [Validators.required]],
        genero: ['', [Validators.required]],
        cpfCnpj: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        cep: ['', [Validators.required]],
        endereco: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        uf: ['', [Validators.required]],
        complemento: ['',],
      });

  }

  cadastrar(): void {
    this.cadastroUsuarioService.cadastrarUsuario(this.formUsuario.value).subscribe(() =>
      this.cadastroUsuarioService.showAlert()
    )
  };


  cancelar(): void{
    this.router.navigate(['/'])
   };

}
