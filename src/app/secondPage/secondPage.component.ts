import { Component, OnInit } from "@angular/core";
import { APIService } from "../apiservice.service";

interface Abo {
  name: string,
  price: number,
  period: number,
  users: number,
  best_value?: boolean
}

@Component({
  selector: "app-second-page",
  templateUrl: "./secondPage.component.html",
  styleUrls: ["./secondPage.component.scss"],
})
export class SecondPageComponent implements OnInit {

  tabAbo: Abo[] = [];

  constructor(private APIService: APIService) {}

  ngOnInit(): void {
    this.getSubscribe();
  }

  public getSubscribe() {
    this.APIService.getSubscriptions().subscribe((data) => {
      this.tabAbo = data;
      return data;
    });
  }



}
