import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User> = []
  user: User = new User()
  uForm: FormGroup
  isEdit = false
  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService) {

      this.uForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
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

  editMode(user: User){
    this.isEdit = !this.isEdit
    this.user = user
    this.addUser()
    this.uForm.patchValue({
      name: user.name,
      email: user.email,
      role: user.role
    })

  }
  alert: boolean = false
  submitForm(){
    if(this.isEdit){
      this.editUser()
    }else{
      this.saveUser()
    }
    this.alert = true
  }

  readUser(): User {
    const user: User = new User()

    if(this.isEdit) user._id = this.user._id
    user.name = this.u.name.value
    user.email = this.u.email.value
    user.password = this.u.password.value
    user.role = this.u.role.value

    return user
  }

  saveUser(){
    this.userService.saveUser(this.readUser()).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  editUser(){
    this.userService.updateUser(this.readUser()).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteUser(id: any){
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  loadUsers(){
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadUsers()
  }

}
