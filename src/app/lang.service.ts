import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LangService {
    private langSubject = new BehaviorSubject<string>('hi');
    langChange$ = this.langSubject.asObservable();

    changeLang(lang: string) {
        this.langSubject.next(lang);
    }

    getSelectedLang(): string {
        return this.langSubject.value;
    }
}