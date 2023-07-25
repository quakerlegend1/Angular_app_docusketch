import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("pass") pass!: ElementRef<HTMLInputElement>
  loginForm!: FormGroup;
 
  constructor(private router: Router) {
 
  }
 
  submitLogin() {
   console.log(this.loginForm.value);
   if(this.loginForm.get("password")?.invalid && this.loginForm.get("password")?.touched) {
     this.pass.nativeElement.style.backgroundColor= "#ffcc00"
   }
   if(this.loginForm.get("password")?.valid) {
     this.router.navigate(['/main'])
   }
   
  }
 
  ngOnInit(): void {
      this.loginForm = new FormGroup({
       "login": new FormControl("",[Validators.required, Validators.minLength(3)]),
       "password": new FormControl("",[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
      })
  }
}
