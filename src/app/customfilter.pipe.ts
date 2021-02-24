import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(value: any, args?:any): any {
     if(!args){
       return value;
     }
     return value.filter
     (item=>item.first_name.toLowerCase().indexOf(args.toLowerCase())>-1)

}


}
