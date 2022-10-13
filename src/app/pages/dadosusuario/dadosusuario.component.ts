import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { CadastroUsuarioService } from 'src/app/services/cadastrousuario.service';


@Component({
  selector: 'app-dadosusuario',
  templateUrl: './dadosusuario.component.html',
  styleUrls: ['./dadosusuario.component.css']
})
export class DadosusuarioComponent {

  formDadosUsuario: FormGroup;
  // usuario: Usuario;

  constructor(private formBuilder: FormBuilder, private router: Router ,
    private cadastroUsuarioService: CadastroUsuarioService) {
      // this.usuario = this.cadastroUsuarioService.getUsuario('1');
      this.formDadosUsuario = this.formBuilder.group({
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
        altSenha: ['',],
      });
  }

  cadastrar(): void {
    this.cadastroUsuarioService.salvar(this.formDadosUsuario.value).subscribe(() =>
    this.router.navigate(['/dadosusuario'])
    )
  };

  cancelar(): void{
    this.router.navigate(['/usuario'])
   };

}
