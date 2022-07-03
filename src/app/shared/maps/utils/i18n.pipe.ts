import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from './i18n.service';
import { Locale_I18n } from './locale_i18n.interface';

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
