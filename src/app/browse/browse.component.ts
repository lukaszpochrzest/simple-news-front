import {Component} from '@angular/core';
import {NewsService} from "../service/news.service";

@Component({
    selector: 'browse',
    styleUrls: ['./browse-component.css'],
    templateUrl: './browse.component.html'
})
export class BrowseComponent {
    country;
    category;
    articles;
    loading = false;

    constructor(public newsService: NewsService) {
    }

    getNews(lang: string, category: string) {
        this.loading = true;
        this.newsService.getNews(lang, category).subscribe(data => {
            this.category = data['category'];
            this.country = data['country'];
            this.articles = data['articles'];
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
}
