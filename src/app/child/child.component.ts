
import { Component, OnInit, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormService } from '../form.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() id;
  user: any
  
  constructor(private Formservice: FormService,
    private http: HttpClient) { }
  ngOnInit(): void {
    console.log("NgOn init");
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.id){
      this.http.get('https://reqres.in/api/users/' + this.id)
      .subscribe(responseData => {
       this.user = responseData;               
     });
    }   
  }

  

}


