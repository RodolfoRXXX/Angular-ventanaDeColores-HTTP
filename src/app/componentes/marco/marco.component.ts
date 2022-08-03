import { Component, OnInit, Output } from '@angular/core';
import { Foto } from 'src/app/entidades/foto';
import { AccesoRecursoService } from 'src/app/servicios/acceso-recurso.service';

@Component({
  selector: 'app-marco',
  templateUrl: './marco.component.html',
  styleUrls: ['./marco.component.css']
})
export class MarcoComponent implements OnInit {

  fotos: Foto[];

  constructor( private acceso: AccesoRecursoService ) { }

  ngOnInit(): void {
    this.getFotos();
  }

  getFotos():void{
    this.acceso.getFotos()
        .subscribe( (data: Foto[]) => {
          this.fotos = data.filter( element => element.id < 100 );
        } )
  }

}
