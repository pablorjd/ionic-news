import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  setected: string = this.categories[0];

  constructor(private servicio: NewsapiService) {}


  ngOnInit(): void {
    this.getTopHeadlinesByCategory(this.setected);
  }

  segmentChanged(category: any) {
    console.log(category.detail.value);
    this.getTopHeadlinesByCategory(category.detail.value);
  }

  getTopHeadlinesByCategory(category: string) {
    this.servicio.getTopHeadlinesByCategory(category).subscribe((article) => {
      console.log(article);
    });
  }
}
