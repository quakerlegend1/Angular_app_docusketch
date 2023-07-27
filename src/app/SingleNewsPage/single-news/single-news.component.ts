import { Component, OnInit } from '@angular/core';
import { NewsDataService } from 'src/app/main-page/news-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {

  constructor(private news: NewsDataService, private location: Location) { }
  _newsData = this.news.getData();
  currImg!: string;
  currTitle!: string;
  currDesc!: string;

  currLinkId = Number(this.location.path().split("/").pop()); // получаем id текущего адреса(id новости)
  currArr: any[] = this._newsData.filter(obj => { return obj.id === this.currLinkId });
  ngOnInit(): void {
    this.currImg = this.currArr[0].img;// id уникален всегда, поэтому [0]-первый/единственный элемент
    this.currTitle = this.currArr[0].title;
    this.currDesc = this.currArr[0].description;
    // console.log(this.currLinkId, this.currArr)
  }

}
