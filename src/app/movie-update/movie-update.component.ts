import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  movieData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getMovie(this.id).subscribe((data: {}) => {
      this.movieData = data[0]; 
    })
  }

  // Update movie
  updateMovie() {
    if(this.movieData.name != '' ){
      if(this.movieData.genre != ''){
        if(window.confirm('Esta seguro de acyualizar los datos?')){
          this.restApi.updateMovie(this.id, this.movieData).subscribe(data => {
            console.log(data)
            this.router.navigate(['/movie-list'])
          })
        }
      }else{
        console.log("Ingrese el genero")
      }
    }else{
      console.log("Ingrese el nombre")
    }
      
    
  }

}
