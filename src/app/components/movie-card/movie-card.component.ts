import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movies';
import { tmdbconfig } from '../../constants/config';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input()movies!: Movie; 
  tmdbconfig=tmdbconfig;
}
