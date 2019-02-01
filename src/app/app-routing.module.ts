import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuoteComponent } from '../app/Random Quote/random-quote.component';
import { AvailableCategoriesComponent } from '../app/Available Categories/available-categories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'random', component: RandomQuoteComponent  },
  { path: 'categories', component: AvailableCategoriesComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
