import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details.component';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class GameDetailsModule { }
