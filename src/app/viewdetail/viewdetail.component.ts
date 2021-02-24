import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import {User} from '../classes/user';
@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
   id:any;
  //  data:User="";
   data:any;

  
  constructor(
    private Formservice: FormService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
   this.id=  this.route.snapshot.params['id'];
   this.getOne();
  }
  getOne(){
   this.Formservice.getOne(this.id).subscribe(data=>{
     this.data=data;
     console.log(this.data);
   })
  }
  goBack(){
    this.router.navigate(['/list-user'])
  }

  detail(index:number){
    let pr
  }

}
