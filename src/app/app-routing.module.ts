import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', component: MenuComponent},
  { path: 'create-movie', component: MovieCreateComponent },
  { path: 'employee-movie/:id', component: MovieDetailsComponent },
  { path: 'update-movie/:id', component: MovieUpdateComponent },
  { path: 'movie-list', component: MovieListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
