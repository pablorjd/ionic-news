import { Component, OnInit } from '@angular/core';

// servicio de noticias
import { NewsapiService } from '../../services/newsapi.service';
import { Article } from '../../interfaces/News';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public articles: Article [] = [];
  constructor(
    private newsapiService: NewsapiService
  ) {}


  ngOnInit(): void {
    this.newsapiService.getTopHeadLine()
        .subscribe(articles => {
          this.articles.push(...articles);
        });

  }

}
