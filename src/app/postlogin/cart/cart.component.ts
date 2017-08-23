import { Component, OnInit } from '@angular/core';
import {CartService} from './services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  courses=[];
  isLoading=true;
  constructor(private _cartService:CartService) { }

  ngOnInit() {
    this._cartService.getCart().subscribe(
        x => { this.courses = x; console.log(x); },
            error => console.log(error),
             ()=>{
            this.isLoading = false;     
             }
    );
  }

}
