import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ateCount'
})
export class AteCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
