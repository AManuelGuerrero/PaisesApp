import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  placeholder: string = 'Buscar País...';

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar($event:string){
    this.hayError = false;
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
  }

}
