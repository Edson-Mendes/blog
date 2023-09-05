import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover: string =
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg';
  contentTitle: string = 'Minha notícia';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam facere neque? Optio dolores provident fugiat officia, itaque dolorem eius maxime libero totam, eum atque omnis debitis laboriosam assumenda dolore?';
}
