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
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  users: User[];
  subscription: Subscription;
  selectedUser: null

  constructor(
    private Formservice: FormService,
    private router: Router,
    private modalService: NgbModal,
    private Notificationservice: NotificationService,
    private http: HttpClient,
    private fb: FormBuilder) { }

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

  change(id) {
    this.selectedUser = id;
    console.log(this.selectedUser)
  }

}
