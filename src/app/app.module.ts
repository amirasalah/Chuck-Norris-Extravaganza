import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomQuoteComponent } from '../app/Random Quote/random-quote.component';
import { AvailableCategoriesComponent } from '../app/Available Categories/available-categories.component';
import { HeaderComponent } from './header/header.component';
import { TwitterRelatedComponent } from '../app/Social Components/Twitter Related/twitter-related.component';
import { GiphyRelatedComponent } from '../app/Social Components/Giphy Related/giphy-related.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    AvailableCategoriesComponent,
    HeaderComponent,
    TwitterRelatedComponent,
    GiphyRelatedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
