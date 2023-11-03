import { Component } from '@angular/core';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent {
  cardItem = {
    imgSource:'https://picsum.photos/100',
    productName:'',
    productType: ''
  }
  

  constructor(){}

}
