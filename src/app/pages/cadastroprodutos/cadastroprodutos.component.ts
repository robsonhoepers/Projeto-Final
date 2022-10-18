import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categorias';
import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';





@Component({
  selector: 'app-cadastroprodutos',
  templateUrl: './cadastroprodutos.component.html',
  styleUrls: ['./cadastroprodutos.component.css']
})
export class CadastroprodutosComponent  implements OnInit{

  cadastroProduto: FormGroup;
  categorias: Categoria[]=[] 

  constructor(private formBuilder: FormBuilder, private router: Router , 
              private cadastroProdService: CadastroprodutosService) { 
    
    this.cadastroProduto = this.formBuilder.group({
      
      
      imagensSrc: ['', [Validators.required,]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]],
      nomeProduto: ['', [Validators.required]],
      valorProduto: ['', [Validators.required]],
      quantidade: ['', [Validators.required, Validators.maxLength(6)]],
      categoria: ['', [Validators.required]],
        }); 
       
      }
  ngOnInit(): void {
    this.categorias = [
      {idCategoria: 'C0', categoria:'Cachaça'},
      {idCategoria: 'C1', categoria:'Cerveja'},
      {idCategoria: 'C2', categoria:'Gin'},
      {idCategoria: 'C3', categoria:'Kits'},
      {idCategoria: 'C4', categoria:'Vodka'}
    ];
  }

 

  cadastrar(): void{
    console.log(this.cadastroProduto.value)
    this.cadastroProdService.createProduto(this.cadastroProduto.value).subscribe(() => {
        this.cadastroProdService.showAlert();
        this.cadastroProduto.reset();        
        }
     )};
        
  //console.log(this.cadastroProduto.get('nomeProduto')?.value)
  
  
    
  //}


  cancelar(): void{
    this.router.navigate(['/administrativo'])
   };
    
   
}

// 