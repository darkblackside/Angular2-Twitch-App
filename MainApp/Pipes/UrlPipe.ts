import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Urlify' })
export class UrlPipe implements PipeTransform
{
  transform(text)
  {
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.replace(urlRegex, function(url)
    {
        return '<a href="' + url + '">' + url + '</a>';
    })
  }
}
