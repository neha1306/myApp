
import { Component, OnInit, OnChanges, Input, SimpleChanges, OnDestroy } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '../notification.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit, OnDestroy {
  
  edit: any = {};
  errorMessage: string = null;
  users: User[];
  searchName: string;
  subscription: Subscription;
  closeResult: string;
  addUser: FormGroup;
  submitted = false;
  loading = false;
  selectedUser: null
  editForm: FormGroup;
  user: User;

  constructor(
    private Formservice: FormService,
    private router: Router,
    private modalService: NgbModal,
    private Notificationservice: NotificationService,
    private http: HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getList();
    this.initForm();
    this.editForm = this.fb.group({
      id: [''],
      first_name: [''],
      last_name: [''],
      email: [''],

    });
  }

  initForm() {
    this.addUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required])
    });
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

  get f() {
    return this.addUser.controls;
  }

  onSubmit() {
    if (this.addUser.invalid) {
      this.loading = false;
      this.Notificationservice.showError(" Validation Error", 'Oops!', 3000);
    } else {
      this.loading = true;
      this.subscription = this.Formservice.create(this.addUser.value)
        .subscribe(data => {
          this.Notificationservice.showSuccess(" Successfull", "Success", 3000);
          this.loading = false;
          console.log(data)
          this.ngOnInit();
          this.modalService.dismissAll();
        }, error => {
          console.log("error", error);
          this.Notificationservice.showError("failed", 'Oops!', 3000);
          this.loading = false;
        });
    }
  }

  change(id) {
    this.selectedUser = id;
    console.log(this.selectedUser)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openEdit(targetModal, user: User) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  }


}