import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'LengthFromSeconds' })
export class LengthFromSecondsPipe implements PipeTransform
{
  transform(url) {
    let hours = Math.floor(url/(60*60))
    url -= hours * 3600;

    let minutes = Math.floor(url/60);
    let minutesString = "";
    url -= minutes * 60;
    if(minutes < 10)
    {
      minutesString = "0"+minutes;
    }
    else
    {
      minutesString = minutes.toString();
    }

    let seconds = url;
    let secondsString = "";
    if(seconds < 10)
    {
      secondsString = "0"+seconds;
    }
    else
    {
      secondsString = seconds.toString();
    }

    if(hours > 0)
    {
      return hours + ":" + minutesString + ":" + secondsString;
    }
    else if(minutes > 0)
    {
      return minutesString + ":" + secondsString;
    }
    else
    {
      return secondsString;
    }
  }
}
