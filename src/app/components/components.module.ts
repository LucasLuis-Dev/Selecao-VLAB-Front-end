import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGamesComponent } from './list-games/list-games.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListGamesComponent
  ],
  exports: [
    ListGamesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ComponentsModule { }
