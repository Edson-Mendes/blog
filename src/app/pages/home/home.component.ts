import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  others: Article[];
  main: Article;

  constructor(private articleService: ArticleService) {
    this.others = articleService.fetchOthers();
    this.main = articleService.fetchFirst();
  }

}
