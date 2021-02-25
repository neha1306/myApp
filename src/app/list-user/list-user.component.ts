import { Component, OnInit,OnChanges ,Input} from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import {User} from '../classes/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users:User[];
  searchName:string="";
   id:any;
 
  constructor(private Formservice: FormService, private router: Router) {} 
  ngOnInit(): void {
    this.Formservice.list()
      .subscribe((productData) => {
        console.log(this.users);
        this.users = productData.data;
      },error=>{
          console.log("error",error);
      });
  }

  onClick(listId:number){
    this.router.navigate(['/viewdetail',listId]);
  }

  // detail(Id:number){

  // }

  
}
