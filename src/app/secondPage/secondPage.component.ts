
import { APIService } from './../apiservice.service';
import { Component , OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-second-page',
    templateUrl: './secondPage.component.html',
    styleUrls: ['./secondPage.component.scss']
  })
  export class SecondPageComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {      
      this.getSubscribe()
  }

  public getSubscribe(){
    this.http.get('http://preprod.kinomap.com:3333/subscriptions').subscribe((data) =>{
        console.log(data);
      }
    );
  }


  }

    