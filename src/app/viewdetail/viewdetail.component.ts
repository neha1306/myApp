import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user.module';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit {
 
  user: User[];
  constructor(
    private Formservice: FormService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.Formservice.getOne(id).subscribe(listdata => {
      console.log(listdata);
      this.user=listdata;
    })
  }

  goBack() {
    this.router.navigate(['/list-user'])
  }
 





}
