import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  switchLanguage(language: string) {
    this.tranlate.use(language);
  }

  jsonData: Wrestlers[] = [];

  constructor(private jsonService: JsonService, private tranlate: TranslateService) {
    this.tranlate.setDefaultLang('hi')
  }

  ngOnInit(): void {
    this.jsonService.getJsonData('en').subscribe((data) => {
      this.jsonData = data as Wrestlers[];
      console.log(this.jsonData);
      this.tranlate.onLangChange.subscribe(event => {
        console.log('Language changed to', event.lang);
      });
    });
  }
}



export interface Wrestlers {
  name: string
  total_matches: number
  signature_moves: string[]
  image: string
  description: string
}
