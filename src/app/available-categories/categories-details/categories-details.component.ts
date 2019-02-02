import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuoteGeneratorService } from '../../services/quote-generator-api/quote-generator.service';
@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.sass"]
})
export class CategoriesDetailsComponent implements OnInit {
  public searchWord;
  public searchResults;
  constructor(
    private quoteGeneratorService:QuoteGeneratorService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.searchWord = routeParams;
      console.log(this.searchWord.category);
      this.quoteGeneratorService.searchCategory(this.searchWord.category).subscribe(res => {
        this.searchResults = res;
      })

    });
  }
}
