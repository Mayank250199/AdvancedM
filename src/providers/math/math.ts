import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MathProvider {
serveUrl:any;
  constructor(public http: HttpClient) {
    console.log('Hello MathProvider Provider');
    this.serveUrl="https://newton.now.sh/";
  }

  getResults(operation:any,expression:any){
    return this.http.get(this.serveUrl +operation+ '/'+expression);
}
}
