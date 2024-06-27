import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {HeaderComponent} from '../header/header.component'

import axios from 'axios';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  imports: [CommonModule,HeaderComponent],
  standalone:true

})
export class MovieComponent implements OnInit {

  movies: any[] = [];

  ngOnInit() {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzQ5NWJkMTU3OTg3ZDFmOTgzYWQ4ZGI3NGQzYmExMyIsIm5iZiI6MTcxOTQ4OTgzOS4xODc3Miwic3ViIjoiNjY3ZDU0OTc4ZGFiMWFmYTgxZmUxOWRiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UY1wQiNFe8VgTkMbg3nvpoG3MoaZPV7Xvvc8PXz4CtA'
      }
    };

    axios.get(url, options)
      .then(response => {
        this.movies = response.data.results;
        console.log(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }
}
