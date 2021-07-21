import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  placeholder: string = 'Buscar País...';
  mostrarSugerencias: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar($event:string){
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino=$event;
    this.paisService.buscarPais(this.termino).subscribe( (paises) => {
        this.paises=paises;
    }, (error)=>{
      console.log(error);
      this.hayError = true;
      this.paises=[];
    })
    
  }

  sugerencias(termino: string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias = true;
    if(termino.trim().length===0){
      this.paisesSugeridos = [];
      return;
    }
    this.paisService.buscarPais(termino).subscribe((paises)=>{
      this.paisesSugeridos = paises.splice(0,5);
    },(error)=>{
      this.paisesSugeridos = [];
    })
    
  }

  buscarSugerido(termino: string){
    this.buscar(termino);

  }

}
