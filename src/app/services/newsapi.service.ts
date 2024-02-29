import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, ReqResNews } from '../interfaces/News';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apikey;
const url = environment.url;

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private http: HttpClient) {}

  getTopHeadLine(): Observable<Article[]> {
    return this.http
      .get<ReqResNews>(`${url}top-headlines?country=us&category=business`, {
        params: {
          apiKey,
        },
      })
      .pipe(map((data) => data.articles));
  }

  getTopHeadlinesByCategory(category: string): Observable<Article[]> {
    return this.http
      .get<ReqResNews>(`${url}top-headlines?country=us&category=${category}`, {
        params: {
          apiKey,
        },
      })
      .pipe(map((data) => data.articles));
  }
}
