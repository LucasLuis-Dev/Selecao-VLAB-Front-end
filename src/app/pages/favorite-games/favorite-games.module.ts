import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteGamesComponent } from './favorite-games.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    FavoriteGamesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class FavoriteGamesModule { }
