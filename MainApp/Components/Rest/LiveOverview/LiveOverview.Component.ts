import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';

@Component({
  selector: 'live-overview',
  templateUrl: 'MainApp/Components/Rest/LiveOverview/overview.html',
  styleUrls: ['MainApp/Components/Rest/LiveOverview/overview.css']
})
export class LiveOverviewComponent implements OnInit
{
  public channelname: string;
  public showStream: boolean;

  public constructor()
  {

  }

  public ngOnInit()
  {

  }

  public GetChannelsUrl()
  {
    return Settings.GetStreamEmbedUrl(this.channelname);
  }

  public channelSwitched(channelname: string)
  {
    this.channelname = channelname;
  }
}
