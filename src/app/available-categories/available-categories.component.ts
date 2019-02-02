import { Component, OnInit } from '@angular/core';
import { QuoteGeneratorService } from "../services/quote-generator-api/quote-generator.service";

@Component({
  selector: 'app-available-categories',
  templateUrl: './available-categories.component.html',
  styleUrls: ['./available-categories.component.sass']
})
export class AvailableCategoriesComponent implements OnInit {
  categories;
  constructor(private quoteGeneratorService: QuoteGeneratorService) { }

  ngOnInit() {
    this.generateCategories();

  }
  generateCategories(){
    this.quoteGeneratorService.getCategories().subscribe(result => {
      this.categories = result;
    })
  }
}
