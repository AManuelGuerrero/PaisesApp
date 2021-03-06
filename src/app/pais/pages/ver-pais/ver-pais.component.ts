import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Country = null!;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   ({ id }) =>{
        
    //     this.paisService.getPaisPorAlpha(id).subscribe(paisresponse =>{
    //       this.pais=paisresponse;
    //     });
        
    //   }
    // );
    this.activatedRoute.params
    .pipe(
      switchMap( (param ) => this.paisService.getPaisPorAlpha(param.id)),
      tap(console.log)
    )
    .subscribe( pais => {
      this.pais = pais;
    } )
  }

}
