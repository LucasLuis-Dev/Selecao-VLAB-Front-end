import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent implements OnInit {

  @Input() filter: string = '';

  gamesList: any[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe({
      next: (data: any) => {
        this.gamesList = data;
      },
      error: (error: any) => {
        console.error('Erro ao obter a lista de jogos:', error);
      }
    });
  }
}
