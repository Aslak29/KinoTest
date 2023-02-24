import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstPageComponent } from "./firstPage/firstPage.component";
import { SecondPageComponent } from "./secondPage/secondPage.component";
import { ThirdPageComponent } from "./thirdPage/thirdPage.component";
import { FourPageComponent } from "./fourPage/fourPage.component";
import { FivePageComponent } from "./fivePage/fivePage.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourPageComponent,
    FivePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  exports: [ThirdPageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
