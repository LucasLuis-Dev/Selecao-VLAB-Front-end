import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games/games.service';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent implements OnInit {
  
  gameID: string | null = '';
  selectedGame: any;

  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gameID = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.gameID) {
      this.gamesService.getGameByID(this.gameID).subscribe({
        next: (data: any) => {
          console.log(data);
          this.selectedGame = data;
        },
        error: (error: any) => {
          console.error('Erro ao obter a lista de jogos:', error);
        }
      });
    }
  }
 

  

}
