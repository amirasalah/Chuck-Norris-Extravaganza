import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuoteGeneratorService } from "../../services/quote-generator-api/quote-generator.service";
@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.sass"]
})
export class CategoriesDetailsComponent implements OnInit {
  public searchWord;
  public searchResults;
  constructor(
    private quoteGeneratorService: QuoteGeneratorService,
    private activeRoute: ActivatedRoute
  ) {}
  colors = ["#DDDCDD", "#E8CA7D", "#A37D4E", "#D29A6A", "#F2DBC3" , "#54758F" , "#DDC0AE" , " #787A8E" , "#B3B9C4" ];
  generateBackground(){
    const x = this.colors.length;
    const rand = Math.floor(Math.random()*x) + 1;
    return this.colors[rand];
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.searchWord = routeParams;
      this.quoteGeneratorService
        .searchCategory(this.searchWord.category)
        .subscribe(res => {
          this.searchResults = res;
        });
    });
  }
}
