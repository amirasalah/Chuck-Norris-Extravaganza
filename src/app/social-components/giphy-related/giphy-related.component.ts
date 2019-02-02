import { Component, OnInit } from "@angular/core";
import { GiphyService } from "src/app/services/giphy-api/giphy.service";
@Component({
  selector: "app-giphy-related",
  templateUrl: "./giphy-related.component.html",
  styleUrls: ["./giphy-related.component.sass"]
})
export class GiphyRelatedComponent implements OnInit {
  public randomGiphs: Object;
  constructor(private giphyService: GiphyService) {}
  ngOnInit() {
    this.giphyService
      .getRandomGiphs()
      .subscribe(result => (this.randomGiphs = result));
  }
}
