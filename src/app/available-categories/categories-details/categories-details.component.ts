import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuoteGeneratorService } from "../../services/quote-generator-api/quote-generator.service";
@Component({
  selector: "app-categories-details",
  templateUrl: "./categories-details.component.html",
  styleUrls: ["./categories-details.component.sass"]
})
export class CategoriesDetailsComponent implements OnInit {
  public searchWord:string;
  public searchResults:[];
  constructor(
    private cdr: ChangeDetectorRef,
    private quoteGeneratorService: QuoteGeneratorService,
    private activeRoute: ActivatedRoute
  ) {}
  public colors = [
    "#DDDCDD",
    "#E8CA7D",
    "#A37D4E",
    "#D29A6A",
    "#F2DBC3",
    "#54758F",
    "#DDC0AE",
    "#787A8E",
    "#B3B9C4"
  ];
  public arrayLength:number = this.colors.length;
  generateBackground(index) {
    console.log(index)
    if(index <=5){
      const rand = Math.floor(Math.random() * (this.arrayLength - 1)) + 1;
      console.log(rand, this.colors[rand]);
      return this.colors[rand];
    }
    
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.searchWord = routeParams;
      this.quoteGeneratorService
        .searchCategory(this.searchWord.category)
        .subscribe(res => {
          this.searchResults = res;
        });
    }).filter((el, index)=> { });
  }
  ngAfterViewInit() {
    console.log(this.cdr.detectChanges())
    this.cdr.detectChanges();
  }
}
