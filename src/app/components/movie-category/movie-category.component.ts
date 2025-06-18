import { Component, Input } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from '../../types/movies';

@Component({
  selector: 'app-movie-category',
  imports: [MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.css'
})
export class MovieCategoryComponent {
 @Input() title="";
 @Input() movieList:Movie[]=[]; // ✅ Input property

}
