import { Component, OnInit } from "@angular/core";

type tabFaq = Array<{
  title: string;
  details: string;
}>;

@Component({
  selector: "app-four-page",
  templateUrl: "./fourPage.component.html",
  styleUrls: ["./fourPage.component.scss"],
})
export class FourPageComponent {

  OneClickButton(index: any) {
    const element = document.getElementById(`toDisplay${index}`);
    element &&
      (element.style.display === "none"
        ? (element.style.display = "block")
        : (element.style.display = "none"));
  }

  tabfaq: tabFaq = [
    {
      title: "Comment connecter mon équipement pour la première fois ?",
      details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Comment ajouter un capteur additionnel ?",
      details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Comment profiter d'un affichage externe ?",
      details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Puis-je résillier mon abonnement à tout moment ?",
      details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Quels sont les modes de paiment proposés ?",
      details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  constructor() {}
  ngOnInit() {}
}
