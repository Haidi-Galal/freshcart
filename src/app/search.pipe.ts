import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './shared/interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:Products[],searchInput:string): Products[] {
    return products.filter((product)=>{
    return   product.title.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

}
