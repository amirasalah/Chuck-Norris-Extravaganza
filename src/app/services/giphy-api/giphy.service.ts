import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GiphyService {
  BaseUrl = "http://api.giphy.com";
  searchTerm = "chuck norris";
  apiKey = "6QHZM4duo4m7Ur0aCeL22oWIKCWoL4fC";
  limit = 5;
  generateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  constructor(private http: HttpClient) {}
  getRandomGiphs() {
    return this.http.get(
      `${this.BaseUrl}/v1/gifs/search?q=${this.searchTerm}&api_key=${
        this.apiKey
      }&limit=${this.limit}&offset=${this.generateRandomNumber(0, 1000)}`
    );
  }
}
