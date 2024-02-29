import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './pages/home/home.module';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { GameDetailsModule } from './pages/game-details/game-details.module';
import { FavoriteGamesComponent } from './pages/favorite-games/favorite-games.component';
import { FavoriteGamesModule } from './pages/favorite-games/favorite-games.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    GameDetailsModule,
    FavoriteGamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
