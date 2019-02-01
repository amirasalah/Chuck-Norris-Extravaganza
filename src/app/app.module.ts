import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AvailableCategoriesComponent } from './available-categories/available-categories.component';
import { HeaderComponent } from './header/header.component';
import { TwitterRelatedComponent } from './twitter-related/twitter-related.component';
import { GiphyRelatedComponent } from './giphy-related/giphy-related.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    AvailableCategoriesComponent,
    HeaderComponent,
    TwitterRelatedComponent,
    GiphyRelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
