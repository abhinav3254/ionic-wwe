import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { SelectChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  languages = [
    { name: 'English', code: 'en' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Spanish', code: 'es' },
    { name: 'Arbic', code: 'ar' },
    { name: 'Telgu', code: 'tel' }
  ];

  selectedLanguage: string = 'hi';

  constructor(private langService: LangService) { }

  ngOnInit() { }

  handleChange(event: CustomEvent<SelectChangeEventDetail<any>>) {
    this.selectedLanguage = event.detail.value;
    console.log('ionChange fired with value: ' + this.selectedLanguage);
    this.langService.changeLang(this.selectedLanguage);
  }

  getSelectedLanguage(): string {
    return this.langService.getSelectedLang();
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }
}