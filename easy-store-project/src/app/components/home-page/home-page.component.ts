import { Component, OnInit } from '@angular/core';
import { ShowItemsService } from '../../services/show-items.service';
import { Item } from '../../models/Item';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: Item[];
  constructor(private showItemsService: ShowItemsService) { }

  ngOnInit(): void {
    this.showItemsService.getItems().subscribe(items =>{
      // console.log(items);
      this.items = items;
    });
  }

}
