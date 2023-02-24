import { Component, OnInit } from "@angular/core";
import { APIService } from "../apiservice.service";

interface faq {
  title: string;
  details: string;
}

@Component({
  selector: "app-four-page",
  templateUrl: "./fourPage.component.html",
  styleUrls: ["./fourPage.component.scss"],
})
export class FourPageComponent implements OnInit {
  
  tabFaq: faq[] = [];

  constructor(private APIService: APIService) {}

  ngOnInit() {
    this.getFaq();
  }

  public getFaq() {
    this.APIService.getFaq().subscribe((data) => {
      this.tabFaq = data;
      return data;
    });
  }

  OneClickButton(index: any) {
    const element = document.getElementById(`toDisplay${index}`);
    element &&
      (element.style.display === "none"
        ? (element.style.display = "block")
        : (element.style.display = "none"));
  }
}
