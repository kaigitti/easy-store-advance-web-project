import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ShowItemsService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public ess: AngularFirestore) {
    this.items = this.ess.collection('items').valueChanges();
  }

  getItems(){
    return this.items;
  }
}
