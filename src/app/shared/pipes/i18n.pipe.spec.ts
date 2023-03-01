import { Locale_I18n } from '../interfaces/locale_i18n.interface';
import { I18nService } from '../services/i18n/i18n.service';
import { I18nPipe } from './i18n.pipe';

describe('I18nPipe', () => {
  it('create an instance', () => {
    const pipe = new I18nPipe(new I18nService(""));
    expect(pipe).toBeTruthy();
  });
});


describe('I18nPipe', () => {
  let pipe: I18nPipe;
  let i18nService: I18nService;

  beforeEach(() => {
    i18nService = new I18nService("");
    pipe = new I18nPipe(i18nService);
  });

  it('should create the pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string if value is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toEqual('');
  });

  it('should return the correct value for a given locale', () => {
    const locale: Locale_I18n = {
      "en-US": ['English', 'United States'],
      "fr-FR": ['French', 'France'],
      "de-DE": ['German', 'Germany'],
      "es-ES": ['Spanish', 'Spain'],
      "pt-PT": ['Portuguese', 'Portugal'],
    };
    spyOn(i18nService, 'getCurrentLocal').and.returnValue(locale.en_US);
    const result = pipe.transform(locale);
    expect(result).toEqual('English');
  });

  it('should return the correct value for a different locale', () => {
    const locale: Locale_I18n = {
      "en-US": ['English', 'United States'],
      "fr-FR": ['French', 'France'],
      "de-DE": ['German', 'Germany'],
      "es-ES": ['Spanish', 'Spain'],
      "pt-PT": ['Portuguese', 'Portugal'],
    };
    spyOn(i18nService, 'getCurrentLocal').and.returnValue(locale.fr_FR);
    const result = pipe.transform(locale);
    expect(result).toEqual('French');
  });
});
