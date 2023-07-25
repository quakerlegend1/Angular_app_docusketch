import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginGuardGuard } from './guard/login-guard.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "main", component: MainPageComponent, canActivate:[loginGuardGuard], },
  {path: "**", component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
