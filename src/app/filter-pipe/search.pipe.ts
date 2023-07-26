import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(newsArr:any[], searchText:string):any[] {
    if(!newsArr) return [];
    if(!searchText) return newsArr;

    searchText = searchText.toLowerCase()

    return newsArr.filter((obj) => {return obj.title?.toLowerCase().includes(searchText) || obj.description?.toLowerCase().includes(searchText) })
  }
  

}
