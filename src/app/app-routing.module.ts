import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AvailableCategoriesComponent } from './available-categories/available-categories.component';
import { HomeComponent } from './home/home.component';
import { CategoriesDetailsComponent } from './available-categories/categories-details/categories-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'random', component: RandomQuoteComponent  },
  { path: 'categories', component: AvailableCategoriesComponent },
  { path: 'categories/:category', component: CategoriesDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
