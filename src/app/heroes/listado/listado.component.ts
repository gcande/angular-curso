import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes: string[] = ['Hull','Iroman','SpiderMan','Capitan America','Viuda Negra'];
  heroeBorradoDos: string= '';
  heroeBorrado: string[] = [] || undefined || '';
  ultimo: string = '';

  borrarHeroe(i: number) {
    // this.heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = this.heroes.splice(i,1);     
  }

  borrarHeroeDos() {
     this.heroeBorradoDos = this.heroes.shift() || '';    
  }

 
  borrarUltimo() {
   this.ultimo = this.heroes.pop() || '';
   console.log(this.ultimo)
  }

  gabriel() {
    this.heroes.unshift('Gabriel');
  }


}
