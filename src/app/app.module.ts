import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RandomQuoteComponent } from "../app/random-quote/random-quote.component";
import { AvailableCategoriesComponent } from "../app/available-categories/available-categories.component";
import { HeaderComponent } from "../app/header/header.component";
import { GiphyRelatedComponent } from "../app/social-components/giphy-related/giphy-related.component";
import { HomeComponent } from "../app/home/home.component";
import { CategoriesDetailsComponent } from '../app/available-categories/categories-details/categories-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    AvailableCategoriesComponent,
    HeaderComponent,
    GiphyRelatedComponent,
    HomeComponent,
    CategoriesDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
