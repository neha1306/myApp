import { Component,OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';
import {MyserviceService} from './myservice.service';
// import { HttpClientModule} from '@angular/common/http';
import { Employee }  from './employee';
import {TestService} from "./test.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'Angular 6 Project';
  // currentItem="Hii Guys";

// todaydate;

// constructor(private myservice: MyserviceService) {}
// ngOnInit() {
//    this.todaydate = this.myservice.showTodayDate();
// }

// constructor(){}
// ngOnInit(){}

// items=['item1', 'item2', 'item3'];
 
// addItem(newItem : string){
//   this.items.push(newItem);
// }
// }



// export class AppComponent implements OnDestroy {
//     messages: any[] = [];
//     subscription: Subscription;

//     constructor( private messageService: MessageService){
//         // subscribe to home component messages
//         this.subscription = this.messageService.getMessage().subscribe(message => {
//           if (message) {
//             this.messages.push(message);
//           } else {
//             // clear messages when empty message received
//             this.messages = [];
//           }
//         });
//     }

//     ngOnDestroy() {
//         // unsubscribe to ensure no memory leaks
//         this.subscription.unsubscribe();
//     }
// }

  // title = 'Lazy loading feature modules';
  // color : string;

  // message="hlo";
  // update(){
  //   this.message="hii";
  // }
  emp = new Employee('Mahesh', 20);	
  msg: string = 'Hello World!';

  onFormSubmit(empForm: NgForm) {
	  let name = empForm.controls['name'].value;
	  let age = empForm.controls['age'].value;
	  this.emp = new Employee(name, age);
  }  
  constructor (private testService:TestService){

  }

  // fetch(){
  //   this.testService.fetch().subscribe(data =>
  //     console.log(data));   
  // }
}