import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent  {

  @Input() gamesList: any[] = [];
  @Input() useFavoriteButton: boolean = true;

  constructor(private gamesService: GamesService) {}

  saveGameToFavorites(game: any) {
    if (this.isGameFavorite(game)) {
      this.gamesService.removeGameFromFavorites(game);
    } else {
      this.gamesService.saveGameToFavorites(game);
    }
  }


  isGameFavorite(game: any): boolean {
    return this.gamesService.isGameInFavorites(game);
  }
}
