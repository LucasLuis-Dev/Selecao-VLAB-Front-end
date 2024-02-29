import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { FavoriteGamesComponent } from './pages/favorite-games/favorite-games.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'gameDetail/:id', component: GameDetailsComponent },
  {path: 'favoriteGames', component: FavoriteGamesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
