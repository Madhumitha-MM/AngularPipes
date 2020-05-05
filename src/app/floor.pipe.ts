import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rev'
})
export class FloorPipe implements PipeTransform {

  transform(value:string):string{
    
     for(let i=value.length;i>0;i--){
       return value[i];
     }
      }

}
