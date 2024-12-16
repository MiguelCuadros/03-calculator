import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pantalla: string = '';

  agregar(valor: string) {
    if (valor === 'C') {
      this.pantalla = '';
    } else if (valor === '=') {
      this.calcular();
    } else if (valor === '+/-') {
      this.cambiarSigno();
    } else {
      if (this.esOperador(valor) && this.esOperador(this.pantalla.slice(-1))) {
        this.pantalla = this.pantalla.slice(0, -1) + valor;
      } else {
        this.pantalla += valor;
      }
    }
  }

  calcular() {
    try {
      if (this.pantalla.trim() === '') return;

      const formula = this.pantalla
        .replace(/x/g, '*')
        .replace(/%/g, '/100');

      const result = new Function(`return ${formula}`)();
      this.pantalla = result.toString();
    } catch (error) {
      this.pantalla = 'Error';
      console.error('Error de cálculo:', error);
    }
  }

  cambiarSigno() {
    if (this.pantalla) {
      if (this.pantalla.startsWith('-')) {
        this.pantalla = this.pantalla.slice(1);
      } else {
        this.pantalla = '-' + this.pantalla;
      }
    }
  }

  private esOperador(caracter: string): boolean {
    return ['+', '-', 'x', '/', '%'].includes(caracter);
  }

}
