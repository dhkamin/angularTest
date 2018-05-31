import { Injectable ,Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorisService {

  constructor(private http: Http) { }
  //http://94.23.18.212:8080/api/categories?language=EN
  getCategorie() {
   
  // return this.http.get('http://94.23.18.212:8080/api/categories?language=EN').map((res)=>{
  // this.res.json();
  // });
}
}