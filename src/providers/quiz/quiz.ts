import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class QuizProvider {
  dataStore: any;

  grandTotal: number = 0;
  constructor(public http: HttpClient) {

    console.log('Hello QuizProvider Provider');
  }
  setTotal(val: number){
    this.grandTotal = this.grandTotal + val;
    
  }

  newScore(){
    this.grandTotal = 0;
  }
}
