import { Component } from '@angular/core';
import { NewsDataService } from './news-data.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private news: NewsDataService) { }

  newsData = this.news.getData();

  selectedCategory: string = "all";

  filterNews() {
    if (this.selectedCategory === 'all') {
      return this.newsData
    } else if (this.selectedCategory === 'Angular') {
      return this.newsData.filter((item) => item.category === "Angular")
    } else if (this.selectedCategory === 'React') {
      return this.newsData.filter((item) => item.category === "React")
    } else if (this.selectedCategory === 'Vue') {
      return this.newsData.filter((item) => item.category === "Vue")
    }
    return
  }


}
