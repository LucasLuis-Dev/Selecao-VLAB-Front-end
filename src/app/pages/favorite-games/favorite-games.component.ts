import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-games',
  templateUrl: './favorite-games.component.html',
  styleUrl: './favorite-games.component.scss'
})
export class FavoriteGamesComponent implements OnInit {
  
  favoriteGames: any[] = [];

  ngOnInit(): void {
    this.getFavoriteGames();
  }

  getFavoriteGames() {
    const savedGames = localStorage.getItem('favoriteGames');
    console.log(savedGames);
    if (savedGames) {
      this.favoriteGames = JSON.parse(savedGames);
    }
  }
}
