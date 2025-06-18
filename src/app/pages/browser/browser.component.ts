import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { MovieCategoryComponent } from "../../components/movie-category/movie-category.component";
import { MovieService } from '../service/movie.service';
import { Movie } from '../../types/movies';
import { tmdbconfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css'],
  imports: [HeaderComponent, MovieCategoryComponent] 
})
export class BrowserComponent { 
  movieService=inject(MovieService);
  popularMovies:Movie[]=[];
  UpcomingMovies:Movie[]=[];
  NowPlayingMovies:Movie[]=[];
  TopRatedMovies:Movie[]=[];
  bannerMovie!:Movie;
  tmdbconfig=tmdbconfig;
  public domSanitizer=inject(DomSanitizer);
  ngOnInit(){
    this.movieService.getpopularMovies().subscribe((result:any)=>{
      console.log(result);
      this.popularMovies=result.results;
      this.bannerMovie=this.popularMovies[0];
      this.movieService.getMovieVideos(this.bannerMovie.id).subscribe((res:any)=>{
        
        this.bannerMovie.videoKey=res.results.find((x:any)=>(x.site='YouTube')).key;
        console.log(this.bannerMovie)
        
    });
  
  
    this.movieService.getTopRatedMovies().subscribe((result:any)=>{
      
      this.TopRatedMovies=result.results;
    });
  
 
    this.movieService.getNowPlayingMovies().subscribe((result:any)=>{
      
      this.NowPlayingMovies=result.results;
    });
  
  
    this.movieService.getUpcomingMovies().subscribe((result:any)=>{
      
      this.UpcomingMovies=result.results;
    });
  });
}

  }

