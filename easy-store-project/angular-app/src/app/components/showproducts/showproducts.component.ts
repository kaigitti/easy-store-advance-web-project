import { Component, OnInit } from '@angular/core';
import { StoredbService } from '../../services/storedb.service';
@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  storedb: any;
  constructor(private stdb: StoredbService) { 
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.stdb.showItems().subscribe(
        data => {
          this.storedb = data;
        },
        err => {
          console.log(err)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

}
