import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { articlesFaker } from '../data/dataFaker';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  findArticleById(id: string): Article {
    const article: Article | undefined = articlesFaker.find(
      (article) => article.id === id
    );

    // Verifica se article não é undefined.
    if (article) {
      return article;
    }

    throw new Error(`Article not found for id: ${id}`);
  }

  fetchFirst(): Article {
    return articlesFaker[0];
  }

  fetchOthers(): Article[] {
    const others: Article[] = [];

    for (let i = 1; i < articlesFaker.length; i++) {
      others.push(articlesFaker[i]);
    }

    return others;
  }
}
