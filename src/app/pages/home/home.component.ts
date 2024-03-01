import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  gamesList: any[] = [];
  selectedOrderGames: string = '';

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.loadDefaultGames();
  }


  loadDefaultGames(): void {
    this.gamesService.getAllGames().subscribe({
      next: (data: any) => {
        this.gamesList = data;
      },
      error: (error: any) => {
        console.error('Erro ao obter a lista de jogos:', error);
      }
    });
  }

  updateOrder(): void {
    if (this.selectedOrderGames && this.selectedOrderGames !== 'default') {
      console.log(this.selectedOrderGames)
      
      this.gamesService.getGamesByOrder(this.selectedOrderGames).subscribe({
        next: (data: any) => {
          this.gamesList = data;
        },
        error: (error: any) => {
          console.error('Erro ao obter os jogos ordenados:', error);
        }
      });
    }

    else {
      this.loadDefaultGames()
    }
  }
}
