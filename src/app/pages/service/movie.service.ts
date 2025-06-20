import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tmdbconfig } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpService=inject(HttpClient);

  getpopularMovies(){
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/popular',{
      headers:headers
    });
  }
  getNowPlayingMovies(){
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/now_playing',{
      headers:headers,
    });
  }
  getTopRatedMovies(){
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/top_rated',{
      headers:headers,
    });
  }
  getUpcomingMovies(){
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/upcoming',{
      headers:headers,
    });
  }
  getHeaders(){
    let headers = new HttpHeaders();
    headers=headers.append("accept","application/json");
    headers=headers.append("Authorization","Bearer "+tmdbconfig.accessToken);
    return headers;
}
  getMovieVideos(movieId:number){
    
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/1241982/videos?api_key=7c3d49f2357fc44e479509e62ba55ac5',{
      headers:headers,
    });
  }
}
