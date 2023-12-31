import { Injectable, OnInit } from '@angular/core';

// interface NewsItem {
//   id: number;
//   title: string;
//   link: string;
//   description: string;
//   category: string;
//   img: string;
// }

@Injectable({
  providedIn: 'root'
})
export class NewsDataService implements OnInit {

  constructor() { this.loadNewsStorage() }

  private news = [
    { id: 1, title: "Angular 12 выпущен", description: "Angular сообщает о выпуске версии 12, которая включает новые функции, такие как строгий режим и поддержка ленивой загрузки модулей.", category: "Angular", img: "assets/ang_1.png" },
    { id: 2, title: "Команда Angular анонсировала", description: " Angular представляет Angular Elements, инструмент для создания и использования компонентов Angular вне Angular-приложений.", category: "Angular", img: "assets/ang_2.png" },
    { id: 3, title: "Google объявил о", description: "Google объявляет о партнерстве с командой Angular и обещает увеличить инвестиции в разработку фреймворка Angular.", category: "Angular", img: "assets/ang_3.png" },
    { id: 4, title: "Google анонсировала", description: "Google представляет новую версию AngularDart, фреймворка Angular для разработки веб-приложений на языке Dart.", category: "Angular", img: "assets/ang_4.png" },
    { id: 5, title: "React 17 был выпущен", description: "Команда React рада представить версию 17, которая включает оптимизации, улучшение стабильности и новые возможности.", category: "React", img: "assets/react_5.png" },
    { id: 6, title: "Facebook анонсирует React Native", description: "Facebook представляет новую версию React Native с поддержкой AndroidX, улучшенным Hot Reloading и другими новыми функциями.", category: "React", img: "assets/react_6.png" },
    { id: 7, title: "React Router 6 вышел", description: "Вышла версия 6 популярной библиотеки React Router, которая предлагает упрощенный API и новые возможности для управления навигацией в React приложениях.", category: "React", img: "assets/react_7.png" },
    { id: 8, title: "Vue 3 официально выпущен", description: "Команда Vue рада представить стабильную версию 3 с новым композиционным API, улучшенной производительностью и другими важными обновлениями.", category: "Vue", img: "assets/vue_8.png" },
    { id: 9, title: "Vue CLI 5 был анонсирован", description: "Вышла новая версия Vue CLI, которая предлагает новые инструменты для разработки Vue приложений и улучшенные возможности настройки проекта.", category: "Vue", img: "assets/vue_9.png" },
    { id: 10, title: "Vue.js набирает популярность", description: " Все больше разработчиков выбирают Vue.js для создания мощных и эффективных одностраничных приложений благодаря его простоте и производительности.", category: "Vue", img: "assets/vue_10.png" },


  ]

  getData() {
    return this.news
  }

  ngOnInit(): void {

  }

  createNews(newNews: any) {
    this.news.push(newNews);
    localStorage.setItem('news', JSON.stringify(this.news));
  }

  loadNewsStorage() {
    const storageStr = localStorage.getItem("news")
    if (storageStr) {
      this.news = JSON.parse(storageStr)
    }
  }


}
