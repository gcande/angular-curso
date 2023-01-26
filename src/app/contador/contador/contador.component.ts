import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
                <div class="container-contador">
                    <h2>{{ titulo }}</h2>
                    <h3>La base es: <strong>{{ base }}</strong></h3>
                    
                    <button (click)="acomular( base )"> + {{ base }} </button>
                    <span> {{ numero }} </span>
                    <button (click)="acomular(-base)"> - {{ base }} </button>
                </div>
                `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5

    acomular(valor: number) {
        this.numero += valor;
    }
}