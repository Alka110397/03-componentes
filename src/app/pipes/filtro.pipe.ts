import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
     texto: string = '',
     columna: string = 'title'): any[] {

    if(texto === '' || texto === 'todos'){
      return arreglo;
    }
    
    if(!arreglo) {
      return arreglo;
    }  

    texto = texto.toLowerCase();

    console.log(arreglo);
    console.log(texto);

    return arreglo.filter(item => 
      item[columna].toLowerCase().includes(texto)
    );
  }

}
