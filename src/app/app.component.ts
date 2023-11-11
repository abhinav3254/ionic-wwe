import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private tranlate: TranslateService) {
    this.tranlate.setDefaultLang('en')
  }

  switchLanguage(language: string) {
    this.tranlate.use(language);
  }
}
