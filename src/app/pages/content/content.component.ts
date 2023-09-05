import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { noticiasFaker } from '../../data/dataFaker';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  id: string | null = '';
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.getContent(this.id);
  }

  getContent(id: string | null) {
    const result = noticiasFaker.find(
      (article) => article.id.toString() === id
    );

    if (result !== undefined) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    } else {
      console.error(`Noticia not found for id: ${this.id}`);
    }
  }
}
