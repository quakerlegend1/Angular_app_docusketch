import { Component } from '@angular/core';
import { NewsDataService } from './news-data.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  

  constructor(private news: NewsDataService) {}

  newsData = this.news.getData() ;

}
