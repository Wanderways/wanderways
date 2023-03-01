import { Pipe, PipeTransform } from '@angular/core';
import { Locale_I18n } from '../interfaces/locale_i18n.interface';
import { I18nService } from '../services/i18n/i18n.service';

/**
 * Considered pure because language does not change without page reload
 */
@Pipe({
  name: 'i18n',
  standalone: true
})
export class I18nPipe implements PipeTransform {

  constructor(private i18n: I18nService) { }

  transform(value?: Locale_I18n): string {
    if (!value) return "";
    return this.i18n.getCurrentLocal(value)[0];
  }

}
