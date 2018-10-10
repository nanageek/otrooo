import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getLocaleDayPeriods } from '@angular/common';
//import { MiApiProvider } from '@angular/common';
/*
  Generated class for the MiapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MiapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MiapiProvider Provider');
  }
  getArticulos(){
    return this.http.get("https://sheltered-journey-28588.herokuapp.com/api/v1/articles")
}
}


