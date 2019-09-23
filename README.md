# AngularHttpclientApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tecnologias utilizadas
Angular v8: logica del proyecto
Bootstrap 4: diseño de interfaces graficas
Html: diseño de interfaces graficas
Css: diseño de interfaces graficas
Angular material: diseño de interfaces graficas y componentes basados en la pagina de Angular

## Componentes

Movie-create: Componente desarrollado para realizar el ingreso de las peliculas. route: DOMINIO:PUERTO/create-movie

Movie-update: Componente desarrollado para recibir el detalle de una pelicula y realizar la 
actualizacion de sus valores. route: DOMINIO:PUERTO/update-movie/:id

movie-list: Componente desarrollado para mostrar la lista de peliculas almacenadas en sel servidor, donde se podra seleccionar si desea actualizar sus valores o eliminarlo de la lista. route: DOMINIO:PUERTO/movie-list

menu: Componente desarrollado para realizar el menu de navegacion de la aplicacion web. route: DOMINIO:PUERTO/

## Servicios API REST (Ver https://github.com/jhonargd/angular-httpclient-app/blob/master/src/app/shared/rest-api.service.ts)

Crear una pelicula: Consume el servicio POST dada por la ruta: http://35.232.123.59:4000/items, la cual sera consumida en el archivo: https://github.com/jhonargd/angular-httpclient-app/blob/master/src/app/movie-create/movie-create.component.ts

Listar Peliculas: Consume el servicio GET dada la ruta http://35.232.123.59:4000/items, la cual sera consumida en el archivo: https://github.com/jhonargd/angular-httpclient-app/blob/master/src/app/movie-list/movie-list.component.ts

Leer el detalle de una pelicula: Consume el servicio GET dada la ruta http://35.232.123.59:4000/items/id, la cual sera consumida en el archivo: https://github.com/jhonargd/angular-httpclient-app/blob/master/src/app/movie-update/movie-update.component.ts

Actualizar detalle de una pelicula: Consume el servicio PUT dada la ruta http://35.232.123.59:4000/items/id, la cual sera consumida en el archivo: https://github.com/jhonargd/angular-httpclient-app/blob/master/src/app/movie-update/movie-update.component.ts

Eliminar Pelicula: Consume el servicio DELETE dada la ruta http://35.232.123.59:4000/items/id, la cual sera consumida en el archivo https://github.com/jhonargd/angular-httpclient-app/blob/master/src/app/movie-list/movie-list.component.ts
