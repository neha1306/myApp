import { Component, OnInit, OnChanges, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit,OnChanges, OnDestroy {
  users: User[];
  searchName: string;
  subscription: Subscription;
  closeResult: string;
  addUser: FormGroup;
  submitted = false;
  loading = false;


  @Input() empId: string;
  currentEmpId: string;
  emp:any;
  empList:any;

  constructor(
    private Formservice: FormService,
    private router: Router,
    private modalService: NgbModal,
    private Notificationservice: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.subscription = this.Formservice.list()
      .subscribe((productData) => {
        console.log(this.users);
        this.users = productData.data;
      }, error => {
        console.log("error", error);
      });
  }

  onClick(listId: number) {
    this.router.navigate(['/viewdetail', listId]);
  }

  open(content) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    this.loading = true;
    this.Formservice.create(f.value)
      .subscribe((result) => {
        this.loading = false;
        this.ngOnInit();

        console.log(result);
      }, error => {
        this.loading = false;
        console.log("error", error);
      });
    this.modalService.dismissAll();
  }

  change(id){
    this.currentEmpId=id;
    console.log(this.currentEmpId)
  }

  ngOnChanges(){
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}