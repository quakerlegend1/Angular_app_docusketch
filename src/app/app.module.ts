import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SearchPipe } from './filter-pipe/search.pipe';
import { SingleNewsComponent } from './SingleNewsPage/single-news/single-news.component';
import { UserNewsComponent } from './createNews/user-news/user-news.component';
import { SubscribeComponent } from './subscribe/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    NotFoundPageComponent,
    SearchPipe,
    SingleNewsComponent,
    UserNewsComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // exports:[SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
