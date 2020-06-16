import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-traditional',
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.css']
})
export class TraditionalComponent implements OnInit {

  traditionalwear;
  constructor(private data:DataService,private cart:CartService) { }

  ngOnInit(): void {
    this.data.getTraditionalwear().subscribe(d=>{
      this.traditionalwear=d;
    })
  }
  addItem(idx){
    var t = this.traditionalwear[idx];
  this.cart.cartItems.push(t);
}

}