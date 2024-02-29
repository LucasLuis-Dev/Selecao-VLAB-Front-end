import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl = "http://localhost:4123/";

  constructor(private http: HttpClient) { }

  getAllGames() {
    return this.http.get(this.baseUrl + "games");
  }

  getGameByID(gameID: string) {
    return this.http.get(this.baseUrl + "games/" + gameID)
  }

  getGamesByCategory(category: string) {
    return this.http.get(this.baseUrl + "games/category/" + category)
  }

  saveGameToFavorites(game: any) {
    let favorites: any[] = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    favorites.push(game);
    localStorage.setItem('favoriteGames', JSON.stringify(favorites));
  }

  removeGameFromFavorites(game: any) {
    let favorites: any[] = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    favorites = favorites.filter(favGame => favGame.id !== game.id); 
    localStorage.setItem('favoriteGames', JSON.stringify(favorites));
  }

  isGameInFavorites(game: any): boolean {
    let favorites: any[] = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
    return favorites.some(favGame => favGame.id === game.id); 
  }
  
}