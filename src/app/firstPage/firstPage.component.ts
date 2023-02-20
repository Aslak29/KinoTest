import { Component} from "@angular/core";


@Component({
    selector: 'app-first-page',
    templateUrl: './firstPage.component.html',
    styleUrls: ['./firstPage.component.scss']
  })
  export class FirstPageComponent {
  
    scrollDown() {
      document.getElementById('abonnement')?.scrollIntoView();
    }
    
  }
  