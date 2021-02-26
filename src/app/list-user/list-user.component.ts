import { Component, OnInit,OnChanges ,Input,SimpleChanges,OnDestroy} from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import {User} from '../classes/user';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit,OnDestroy {
  users:User[];
  searchName;
  subscription:Subscription;
  
  constructor(private Formservice: FormService, private router: Router) {} 
  ngOnInit(): void {
   this.subscription= this.Formservice.list()
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



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
}
