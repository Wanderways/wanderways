import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from './language.interface';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  displayLanguageSelector : boolean = false;
  supportedLanguages : Language[] = [
    {
      displayName:"English",
      localeId:"en-US",
      iso3166:"us"
    },
    {
      displayName:"Français",
      localeId:"fr-FR",
      iso3166:"fr"
    },
    {
      displayName:"Deutsch",
      localeId:"de-DE",
      iso3166:"de"
    },
    {
      displayName:"Español",
      localeId:"es-ES",
      iso3166:"es"
    },
    {
      displayName:"Portuguese",
      localeId:"pt-PT",
      iso3166:"pt"
    },
  ];

  currentLanguage! : Language;

  constructor(@Inject(LOCALE_ID) public locale: string, private router : Router) {}

  ngOnInit(): void {
    this.currentLanguage = this.supportedLanguages.find(e => e.localeId === this.locale)!;
  }
  getCurrentUrl(){
    return this.router.url.replace(/\/[a-z]{2}-[A-Z]{2}\//,'');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLanguage',
  standalone: true
})
export class FilterLanguagePipe implements PipeTransform {
  transform( languages : Language[], language: Language): Language[] {
    return  languages.filter(e=>e.localeId!= language.localeId)
  }
}
