import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../lang.service';
import { HeaderComponent } from '../header/header.component';

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

  constructor(
    private jsonService: JsonService,
    private tranlate: TranslateService,
    private langService: LangService
  ) {
    this.tranlate.setDefaultLang('hi');
  }



  ngOnInit(): void {
    this.langService.langChange$.subscribe((selectedLanguage) => {
      // Use the selected language when fetching JSON data
      this.jsonService.getJsonData(selectedLanguage).subscribe((data) => {
        this.jsonData = data as Wrestlers[];
      });

      // Set the translation language
      this.tranlate.use(selectedLanguage);
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
