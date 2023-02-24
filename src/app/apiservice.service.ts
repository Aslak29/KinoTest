import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class APIService {
  constructor(private http: HttpClient) {}

  getSubscriptions(): Observable<any> {
    let url = "http://preprod.kinomap.com:3333/subscriptions";
    return this.http.get(url);
  }

  getScore(): Observable<any> {
    let url = "http://preprod.kinomap.com:3333/score";
    return this.http.get(url);
  }

  getFaq(): Observable<any> {
    return this.http.get("http://preprod.kinomap.com:3333/faq");
  }

  getFreePeriod(): Observable<any> {
    let url = "http://preprod.kinomap.com:3333/free-period";
    return this.http.get(url);
  }
}
