import { Pipe, PipeTransform } from '@angular/core';
import { Locale_I18n } from '../interfaces/locale_i18n.interface';
import { I18nService } from '../services/i18n/i18n.service';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  constructor(private i18n : I18nService){}

  transform(value: Locale_I18n | undefined, ...args: never[]): string {
    if(!value)return "";
    return this.i18n.getCurrentLocal(value)[0];
  }

}
