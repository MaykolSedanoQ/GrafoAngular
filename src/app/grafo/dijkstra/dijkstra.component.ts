import { Component, OnInit } from '@angular/core';
import {Parser} from 'expr-eval';

@Component({
  selector: 'app-dijkstra',
  templateUrl: './dijkstra.component.html',
  styleUrls: ['./dijkstra.component.scss']
})
export class DijkstraComponent implements OnInit {

  informacion: string = "Hola mundo";
  numero: number = 0;
  persona: any;
  num1: number;
  num2: number;
  resultado: number;

  constructor() {
    this.persona = { "nombre": "Maykoll", "apellido": "Sedano" };
  }

  ngOnInit(): void {
    console.log("numero" + this.numero);
    if (this.numero == undefined) {
      this.informacion = "Aun no hay numero"
    }
  }


  public calcular() {

    var parser = new Parser();
    var expr = parser.parse('2 * x + 1');
    this.numero=expr.evaluate({ x: 3 }); 
  }

  public calcularSuma() {
    this.resultado = this.num1 + this.num2;
  }


  public calcularResta() {
    this.resultado = this.num1 - this.num2;
  }

  public calcularMultiplicacion() {
    this.resultado = this.num1 * this.num2;
  }

  public calcularDivision() {
    this.resultado = this.num1 / this.num2;
  }

}
