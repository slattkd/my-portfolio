import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterObjects',
  standalone: true
})
export class FilterObjectsPipe implements PipeTransform {

  transform(objectArr: any[any], key: string, filterText: string): any[any] {
    if (!objectArr || !filterText) {
      return objectArr;
    }
    let uniqueObjects = objectArr.filter((object: any) => object[key] == filterText);
    return uniqueObjects;
  }

}
