import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from '../authService/auth.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @ViewChild("pass") pass!: ElementRef<HTMLInputElement>

 loginForm!: FormGroup;
  currentAuthValue!: object;

 constructor(private router: Router, private authService: AuthService,) {}
 
ngOnInit(): void {
  this.loginForm = new FormGroup({
   "login": new FormControl("",[Validators.required, Validators.minLength(3)]),
   "password": new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
  });
}

 submitLogin() {
  this.authService.isLoggedIn(this.loginForm.value)
  if(this.loginForm.get("password")?.invalid && this.loginForm.get("password")?.touched) {
    this.pass.nativeElement.style.backgroundColor = "#ffcc00"
  } 

  if(this.loginForm.valid) {alert("successfully logged in. User: " +  JSON.stringify(this.loginForm.value))}
  else {alert("Ошибка входа")}

  if(this.authService.isAuth) {
    this.router.navigate(["main"])
   }
  // console.log(this.loginForm.value.login)
 }

}