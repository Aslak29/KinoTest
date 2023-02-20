import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

type tabAbo = Array<
{ 
  name: string,
  price: number,
  period: number,
  users: number,
  best_value?: boolean
}>;

@Component({
  selector: "app-second-page",
  templateUrl: "./secondPage.component.html",
  styleUrls: ["./secondPage.component.scss"],
})
export class SecondPageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getSubscribe();
  }

  public getSubscribe() {
    this.http.get('http://preprod.kinomap.com:3333/subscriptions').subscribe((data) => {
      console.log(data);
    });
  }

  tabfaq: tabAbo = [
    { name: "Mensuel", price:11.99, period:1, users:1, best_value: false},
    { name: "Annuel", price:89.99, period:12, users:1, best_value: true },
    { name: "À vie", price:269.99, period:99, users:1, best_value: false},
  ];

}
