import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class StoredbService {

  storedb: any;

  constructor(private http: HttpClient) { }

  showItems(){
    return this.http.get<any>('http://localhost:3000/getItems')
    .pipe(map(data => {
      if(data){
        this.storedb = data;
        console.log(this.storedb);
      }
      return this.storedb;
    }));
  }

  addItems(storedb){
    return this.http.post<any>('http://localhost:3000/addItems', storedb)
    .pipe(map(data => {
      return data;
    }))
  }

  updateItems(storedb){
    return this.http.put<any>('http://localhost:3000/updateItems', storedb)
    .pipe(map(data => {
      return data;
    }))
  }

  deleteItems(storedb){
    return this.http.delete<any>('http://localhost:3000/deleteItems', storedb)
    .pipe(map(data => {
      return data;
    }))
  }
}
