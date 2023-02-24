import { Component, OnInit } from "@angular/core";
import { APIService } from "../apiservice.service";

type score = number;
type freePeriod = number;

@Component({
  selector: "app-third-page",
  templateUrl: "./thirdPage.component.html",
  styleUrls: ["./thirdPage.component.scss"],
})
export class ThirdPageComponent implements OnInit {
  
  freePeriod: freePeriod = 0;
  score: score = 0;
  partEntScore : number = 0;

  constructor(private APIService: APIService) {}

  ngOnInit(): void {
    this.getScore();
    this.getFreePeriod();
  }

  public getScore() {
    this.APIService.getScore().subscribe((data) => {
      this.score = data;
      this.partEntScore = Math.trunc(this.score);
      return data;
    });
  }

  public getFreePeriod() {
    this.APIService.getFreePeriod().subscribe((data) => {
      this.freePeriod = data;
      return data;
    });
  }
}
