import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  isSent = false

  constructor(private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      password: ["", [Validators.required]]
    })
   }

  ngOnInit() {
  }

  register() {
    this.router.navigate(["/register"])
  }

  signin() {
    this.router.navigate(["/dashboard"])
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
    this.signin()
  }

}
