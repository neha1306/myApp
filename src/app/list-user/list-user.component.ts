import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  product = {};
  constructor(private _listUser: FormService, private router: Router) {
  }

  ngOnInit(): void {
    this._listUser.list()
      .subscribe((productData) => {
        // console.log(productData);
        this.product = productData;
      })
  }

}
