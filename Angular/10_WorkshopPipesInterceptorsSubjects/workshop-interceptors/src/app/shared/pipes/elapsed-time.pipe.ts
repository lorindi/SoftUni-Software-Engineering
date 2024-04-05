import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime',
})
export class ElapsedTimePipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    // today - the given date
    // 21.03.2024 - 21.02.2023 => 1 year 1 month
    return moment(date).fromNow();
  }
}
