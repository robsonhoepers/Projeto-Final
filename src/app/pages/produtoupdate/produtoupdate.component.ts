import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/cadastroprodutos';
import { Categoria } from 'src/app/interfaces/categorias';


import { CadastroprodutosService } from 'src/app/services/cadastroprodutos.service';

@Component({
  selector: 'app-produtoupdate',
  templateUrl: './produtoupdate.component.html',
  styleUrls: ['./produtoupdate.component.css']
})
export class ProdutoupdateComponent implements OnInit {

  
  
  cadastroProduto: FormGroup;
  produto!: Produto;
  categorias: Categoria[]=[]

  constructor(private formBuilder: FormBuilder, 
              private cadastroProdService: CadastroprodutosService, 
              private router: Router, private route: ActivatedRoute ) {
  
  this.cadastroProduto = this.formBuilder.group({
      
          id: [''],
          imagensSrc: [''],
          descricao: [''],
          nomeProduto: [''],
          valorProduto: [''],
          quantidade: [''],
          categoria: ['']
      }); 
     
    }

  ngOnInit(): void {
    
   const id = this.route.snapshot.paramMap.get('id')
   console.log("logId" + id);   
    this.cadastroProdService.readById(id).subscribe(produto =>{
      this.produto = produto
      console.log(produto);
      this.cadastroProduto.patchValue({id: this.produto.id});
      this.cadastroProduto.patchValue({imagensSrc: this.produto.imagensSrc});
      this.cadastroProduto.patchValue({descricao: this.produto.descricao});
      this.cadastroProduto.patchValue({nomeProduto: this.produto.nomeProduto});
      this.cadastroProduto.patchValue({valorProduto: this.produto.valorProduto});
      this.cadastroProduto.patchValue({quantidade: this.produto.quantidade});
      this.cadastroProduto.patchValue({categoria: this.produto.categoria});
    });

    this.categorias = [
      {idCategoria: 'C0', categoria:'Cachaça'},
      {idCategoria: 'C1', categoria:'Cerveja'},
      {idCategoria: 'C2', categoria:'Gin'},
      {idCategoria: 'C3', categoria:'Kits'},
      {idCategoria: 'C4', categoria:'Vodka'}
    ];
  }

  update(): void{
    this.cadastroProdService.update(this.cadastroProduto.value).subscribe(()=>{
      this.cadastroProdService.showAlert3();
      this.router.navigate(['/produtoscadastrados']);
    })
  }
  cancelar(): void{
    this.router.navigate(['/produtoscadastrados']);
  }

  delete(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.route.snapshot.paramMap.get('id')
    this.cadastroProdService.delete(id).subscribe(() => {
    this.cadastroProdService.showAlert2()
    this.router.navigate(['/produtoscadastrados'])
    }
)};
}
