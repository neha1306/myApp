// import { Component, OnInit, OnChanges,SimpleChanges,Input } from '@angular/core';
import { Component, OnInit, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css']
})
export class ViewdetailComponent implements OnInit, OnChanges {
  subscription: Subscription;
  user: any;
  @Input() id;
  emp: string[] = [];

  constructor(
    private Formservice: FormService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnChanges() {

    for (let propName in SimpleChange) {
      let change = SimpleChange[propName];
      console.log(change);
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

      console.log(curVal);
      if (propName === 'id') {
        console.log(propName);
        // this.emp.push(Emp);
      }
    }
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.subscription = this.Formservice.getOne(id).subscribe(listdata => {
      console.log(listdata);
      this.user = listdata;
    })
  }


  goBack() {
    this.router.navigate(['/list-user'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }






}
