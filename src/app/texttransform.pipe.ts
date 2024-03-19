import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texttransform'
})
export class TexttransformPipe implements PipeTransform {

  transform(text :string ,limit:number): string {
    return text.split(' ').slice(0,limit).join(" ");
  }

}
