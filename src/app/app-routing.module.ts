import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { loginGuardGuard } from './guard/login-guard.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SingleNewsComponent } from './SingleNewsPage/single-news/single-news.component';
import { UserNewsComponent } from './createNews/user-news/user-news.component';
import { SubscribeComponent } from './subscribe/subscribe/subscribe.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "main", component: MainPageComponent,canActivate:[loginGuardGuard]}, // canActivate:[loginGuardGuard]
  {path: "main/create-news", component: UserNewsComponent, canActivate:[loginGuardGuard] },
  {path: "main/news/:id", component: SingleNewsComponent, canActivate:[loginGuardGuard] },
  {path: "main/subscribe", component: SubscribeComponent, canActivate:[loginGuardGuard] },
  {path: "**", component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
