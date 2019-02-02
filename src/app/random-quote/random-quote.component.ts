import { Component, OnInit } from "@angular/core";
import { QuoteGeneratorService } from "../services/quote-generator-api/quote-generator.service";
@Component({
  selector: "app-random-quote",
  templateUrl: "./random-quote.component.html",
  styleUrls: ["./random-quote.component.sass"]
})
export class RandomQuoteComponent implements OnInit {
  fetchedQuote: any;
  constructor(private quoteGeneratorService: QuoteGeneratorService) {}

  ngOnInit() {
    this.generateQuote();
  }
  generateQuote() {
    this.quoteGeneratorService.getRandomQuotes().subscribe(result => {
      this.fetchedQuote = result;
    });
  }

  refreshQuote() {
    this.fetchedQuote = null;
    this.generateQuote();
  }
}
