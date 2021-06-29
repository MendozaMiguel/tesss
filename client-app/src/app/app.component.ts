import { Component, OnInit } from '@angular/core';
import { ApiClientService, API_URI_ARTICLES } from './api-client/api-client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(public apiClientService: ApiClientService) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.apiClientService.get(API_URI_ARTICLES).toPromise().then(data => {
      console.log('articles dispo : ', data);
    });
  }
}
