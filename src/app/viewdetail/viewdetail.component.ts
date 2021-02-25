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
   list:any;  
  constructor(
    private Formservice: FormService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

   let id= this.route.snapshot.params['id'];
   console.log(id);
   this.Formservice.getOne(id).subscribe(result=>{
     this.list=result;
     console.log(result);
   })
  }
  goBack(){
    this.router.navigate(['/list-user'])
  }

 

}
