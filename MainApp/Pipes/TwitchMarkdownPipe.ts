import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'TwitchMarkdown' })
export class TwitchMarkdownPipe implements PipeTransform
{
  transform(text)
  {
    return "<p>"+text.replace(new RegExp("\n", 'g'), "</p><p>")+"</p>"
  }
}
