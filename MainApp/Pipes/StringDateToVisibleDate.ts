import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'StringDateToVisibleDate' })
export class StringDateToVisibleDatePipe implements PipeTransform
{
  transform(stringDate)
  {
    let date: Date = new Date(stringDate);

    return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
  }
}

@Pipe({ name: 'StringDateToOnlyDate' })
export class OnlyDatePipe implements PipeTransform
{
  transform(stringDate)
  {
    let date: Date = new Date(stringDate);

    return date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();
  }
}
