import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-blouses',
  templateUrl: './blouses.component.html',
  styleUrls: ['./blouses.component.css']
})
export class BlousesComponent implements OnInit {

  blouses;
  constructor(private data:DataService,private cart:CartService) { }

   ngOnInit() {
    this.data.getBlouses().subscribe(data=>{
      this.blouses=data;
    });
  }
  addItem(idx){
     var blouse = this.blouses[idx];
   this.cart.cartItems.push(blouse);
  
  }

}