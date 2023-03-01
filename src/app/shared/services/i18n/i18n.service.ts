import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Locale_I18n } from '../../interfaces/locale_i18n.interface';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  DEFAULT_LANG = 'en-US';

  constructor(@Inject(LOCALE_ID) public locale_id: string) { }

  /**
   * Allows to get the translation list corresponding to the current local
   * @param locales The array list of available translation to retrieve the wanted one in
   * @returns The appropriate locale if exists, english by default
   */
  getCurrentLocal(locales: Locale_I18n): string[] {
    let result = locales[this.locale_id]
    return !!result.length ? result : locales[this.DEFAULT_LANG];
  }
}
