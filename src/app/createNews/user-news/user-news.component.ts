import { Component, OnInit } from '@angular/core';
import { NewsDataService } from 'src/app/main-page/news-data.service';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css']
})
export class UserNewsComponent implements OnInit {
  _title = "";
  _description = ""
  newsDataClone = []
  constructor(private newsData: NewsDataService) { }

  ngOnInit(): void {

  }

  addNewNews() {
    const newNews = { id: this.newsData.getData().length + 1, title: this._title, description: this._description, category: "all", img: "assets/userNews.png" }
    if ((this._description && this._title) != "") {
      this.newsData.createNews(newNews);
      alert("Ваша новость добавлена на главную страницу")
    }
    this._title = "";
    this._description = "";

    //console.log(this.newsData.getData())
  }
}
