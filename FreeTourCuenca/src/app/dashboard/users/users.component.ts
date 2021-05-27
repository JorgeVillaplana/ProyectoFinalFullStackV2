import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [{
    _id: "aisduhfg",
    name: "Jesús",
    surname: "Apellido",
    role: "Editor"
  }]

  uForm: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router) {

      this.uForm = this.fb.group({
      email: ["", Validators.required, Validators.email],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      password: ["", Validators.required],
      role: ["", Validators.required],
    })
  }

  get u(): any {
    return this.uForm.controls
  }

  userForm = false
  addUser() {
    this.userForm = !this.userForm
  }

  saveUser(){}

  editUser(id: any){

  }

  deleteUser(id: any){}

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
