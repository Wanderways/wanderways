import { TestBed } from '@angular/core/testing';
import { Locale_I18n } from '../../interfaces/locale_i18n.interface';

import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  const locales: Locale_I18n = {
    'en-US': ["hello"],
    'fr-FR': ["bonjour"],
    'de-DE': [],
    'es-ES': [],
    'pt-PT': [],
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return a list of french translations because locale fr-FR exists', () => {
    service.locale_id = 'fr-FR'
    expect(service.getCurrentLocal(locales)[0]).toMatch(/bonjour/i);
  });
  it('should return a list of american translations because locale es-ES does not exist', () => {
    service.locale_id = 'es-ES'
    expect(service.getCurrentLocal(locales)[0]).toMatch(/hello/i);
  });
});
