import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Locale_I18n } from './locale_i18n.interface';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  DEFAULT_LANG='en_US';

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  /**
   * Allows to get the translation list corresponding to the current local
   * @param locales The array list of available translation te retrieve the wanted one in
   * @returns The appropriate locale if exists, english by default
   */
  getCurrentLocal(locales : Locale_I18n): string[] {
    let result = getProperty(locales, this.locale.replace('-','_'))
    return result.length?result:getProperty(locales, this.DEFAULT_LANG);
  }
}

/**
 * Allows to access I18n property dynamically
 * @param o The I18n object
 * @param propertyName The current language
 * @returns The array associated with the current language
 */
function getProperty(o: any, propertyName: string): string[] {
  return o[propertyName];
}