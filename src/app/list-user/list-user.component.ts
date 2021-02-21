import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import {User} from '../classes/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[];
  constructor(private _listUser: FormService, private router: Router) {}
 
  ngOnInit(): void {
    this._listUser.list()
      .subscribe((productData) => {
        console.log(this.users);
        this.users = productData;
      });
  }
  

}
