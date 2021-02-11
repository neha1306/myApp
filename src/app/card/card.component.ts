import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    
  constructor(private _message:MyserviceService) { }
  products={};
  ngOnInit(): void {

    // this.product=this._message.product;
    this._message.product()
    .subscribe(productData=>this.products=productData)

  
  }
  // btnClick(){
  //   this._message.MessageAlert();
  // }
}
