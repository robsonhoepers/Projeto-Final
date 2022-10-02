import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';
import { Produto } from 'src/app/interfaces/cadastroprodutos'



@Component({
  selector: 'app-cadastroprodutos',
  templateUrl: './cadastroprodutos.component.html',
  styleUrls: ['./cadastroprodutos.component.css']
})
export class CadastroprodutosComponent {

  cadastroProduto: FormGroup;
 

  constructor(private formBuilder: FormBuilder, private router: Router , 
              private cadastroProdService: CadastroprodutosService) { 
    
    this.cadastroProduto = this.formBuilder.group({
      
      codProd: ['', [Validators.required]],
      imagensSrc: ['', [Validators.required,]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]],
      nomeProduto: ['', [Validators.required]],
      valorProduto: ['', [Validators.required]],
      quantidade: ['', [Validators.required, Validators.maxLength(6)]],
        }); 
       
      }

 

  cadastrar(): void{
    
    this.cadastroProdService.cadastrarProduto(this.cadastroProduto.value).subscribe(() =>
        this.cadastroProdService.showAlert(),
        )};
        
  //console.log(this.cadastroProduto.get('nomeProduto')?.value)
  //console.log(this.cadastroProduto.value)
  
    
  //}


  cancelar(): void{
    this.router.navigate(['/administrativo'])
   };
    
   
}

// 