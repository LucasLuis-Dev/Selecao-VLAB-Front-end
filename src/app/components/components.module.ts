import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesComponent } from './list-games/list-games.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListGamesComponent
  ],
  exports: [
    ListGamesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ComponentsModule { }
