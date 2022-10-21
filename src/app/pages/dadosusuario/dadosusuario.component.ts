import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { CadastroUsuarioService } from 'src/app/services/cadastrousuario.service';
import { UsuarioComponent } from '../usuario/usuario.component';


@Component({
  selector: 'app-dadosusuario',
  templateUrl: './dadosusuario.component.html',
  styleUrls: ['./dadosusuario.component.css']
})
export class DadosusuarioComponent implements OnInit {

  formDadosUsuario: FormGroup;
  usuario!: Usuario;

  constructor(private formBuilder: FormBuilder, private router: Router ,
    private cadastroUsuarioService: CadastroUsuarioService) {


      this.formDadosUsuario = this.formBuilder.group({
        nome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        telefone: ['', [Validators.required]],
        dataNasc: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        cep: ['', [Validators.required]],
        endereco: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        uf: ['', [Validators.required]],
        complemento: [''],
        altSenha: [''],
      });

    }
  ngOnInit(): void {
    /*
    this.cadastroUsuarioService.readById(userId).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      console.log(usuario); 
    })*/
    
  }

  cadastrar(): void {
    this.cadastroUsuarioService.update(this.formDadosUsuario.value).subscribe(() =>
    this.router.navigate(['/dadosusuario'])
    )
  };

  cancelar(): void{
    this.router.navigate(['/usuario'])
   };

}
