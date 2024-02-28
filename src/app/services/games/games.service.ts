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
}