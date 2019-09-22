import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule,MatToolbarModule,MatButtonModule, MatNativeDateModule} from '@angular/material';

//Módulo de enrutamiento para servicio de enrutador
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

//componentes
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MenuComponent } from './menu/menu.component';

//Módulo HttpClient para API RESTful
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieCreateComponent,
    MovieDetailsComponent,
    MovieUpdateComponent,
    MovieListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
