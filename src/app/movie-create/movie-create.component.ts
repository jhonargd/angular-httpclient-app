import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  id = (Math.floor(Math.random() * (99999 - 10000) + 100000));

  @Input() movieDetails = { id:this.id, name: '', genre: ''}

  constructor(
    public restApi: RestApiService, 
    public router: Router) { }

  ngOnInit() {
  }

  addMovie(dataMovie) {
    if(this.movieDetails.name != '' ){
      if(this.movieDetails.genre != ''){
        this.restApi.createMovie(this.movieDetails).subscribe((data: {}) => {
          this.router.navigate(['/movie-list'])
        })
      }else{
        console.log("Ingrese el genero")
      }
    } else{
      console.log("Ingrese el nombre")
    }
  
  }
}
