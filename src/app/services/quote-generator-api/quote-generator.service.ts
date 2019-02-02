import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuoteGeneratorService {
  BaseUrl = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com";
  httpOptions = {
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "tKnYDxr0FxmshYb7dxWRD7hUtDYlp1RKCKXjsncEU15N1qiLnu"
    },
  };
  constructor(private http: HttpClient) {}
  getRandomQuotes() {
    return this.http.get(`${this.BaseUrl}/jokes/random`, this.httpOptions);
  }
  getCategories() {
    return this.http.get(`${this.BaseUrl}/jokes/categories`, this.httpOptions);
  }
  searchCategory(term) {
    return this.http.get(`${this.BaseUrl}/jokes/search?query=${term}`, this.httpOptions);
  }
}
