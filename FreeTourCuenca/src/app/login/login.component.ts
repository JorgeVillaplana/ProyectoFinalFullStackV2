import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  isSent = false

  constructor(private router: Router,
    private fb: FormBuilder,
    private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      password: ["", [Validators.required]]
    })
   }

  ngOnInit() {
  }

  get login(): any {
    return this.loginForm.controls
  }

  onLogin() {
    console.log("Validando form...", this.login)
    this.isSent = true

    if(this.loginForm.invalid) {
      console.error("Tu form no es valido");
      return
    }

    const login: User = new User()
    login.email = this.login.email.value
    login.password = this.login.password.value
    this.userService.login(login).subscribe(
      (data: any) => {
      localStorage.setItem("token",data.access_token)
      this.router.navigate(["/dashboard"])
      console.log(data)
    },
      error => {
        console.log("Error:", error);
      }
    );
  }

}
