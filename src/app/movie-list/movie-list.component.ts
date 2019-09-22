import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service"

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  Movie: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadMovies()
  }

  //Cargar lista de peliculas
  loadMovies() {
    return this.restApi.getMovies().subscribe((data: {}) => {
      this.Movie = data;
    })
  }

  // Eliminar Pelicula
  deleteMovie(id) {
    if (window.confirm('Esta seguro de eliminar la pelicula?')){
      this.restApi.deleteMovie(id).subscribe(data => {
        this.loadMovies()
      })
    }
  } 

}
