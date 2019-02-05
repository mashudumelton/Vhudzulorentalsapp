import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  items: any;
  constructor(public http: Http) {
    this.items = [
       {title: 'GAUTENG'},
      {title: 'Western Cape'},
      {title: 'Limpopo'},
      {title: 'Free State'},
      {title: 'Kwazulu Natal'},
      {title: 'Cape Town'},
      {title: 'North West'},
      {title: 'Eastern Cape'},
      {title: 'Johannesburg'},
      {title: 'Pretoria'},
      {title: 'Midrand'}
  ]
    console.log('Hello DataProvider Provider');
  }
  filterItems(searchTerm){

    // return this.items.filter((item) => {
    //     return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    // });     

}
}
