import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit { // incrementador es hijo, progress es padre

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('valor') progreso: number = 40; // recibe el valor desde el padre, el padre es progress
  @Input() btnClass: string = 'btn-primary'; // aca recibo el color del componente padre al hijo   [btnClass]="'btn-info'"  color celeste


  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter(); // valor que cambia en el padre y actualiza el progressBar, es decir que si desde el componentes padre actualizo el valor a 150, el output lo va a detectar y colocar en 100 y asi, aca emito el valor que recibo, lo emito al padre

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );
  }

  onChange( nuevoValor: number ){
    
    if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    

    this.valorSalida.emit( this.progreso );
  }

}
