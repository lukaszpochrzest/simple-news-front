import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}
  static apiUrl = environment.apiUrl;

  getNews(lang: string, category: string) {
    return this.http.get(`${NewsService.apiUrl}/news/${lang}/${category}`);
  }
}
