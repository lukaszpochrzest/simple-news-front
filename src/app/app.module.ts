import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowseComponent} from "./browse/browse.component";
import {NewsService} from "./service/news.service";

@NgModule({
  declarations: [
      AppComponent,
      BrowseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    NewsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
