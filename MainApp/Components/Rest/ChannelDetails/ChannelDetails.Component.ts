import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';
import { AuthorizationService } from '../../../Services/Authorization.Service';
import { RestService } from '../../../Services/Rest.Service';
import { ChannelGet } from '../../../Models/Rest/Channel/Channel';
import { ChannelResult } from '../../../Models/Rest/Channel/ChannelResult';

@Component({
  selector: 'user-channel',
  templateUrl: 'MainApp/Components/Rest/ChannelDetails/ChannelDetails.html'
})
export class ChannelDetailsComponent implements OnInit
{
  public constructor(private authService: AuthorizationService, private restService: RestService) {}

  private _channelName: string;

  channel: ChannelGet;

  public ngOnInit()
  {
  }

  @Input()
  public set channelName(value: string)
  {
    this._channelName = value;
    this.restService.RestCall<ChannelGet>(new ChannelGet(value)).subscribe(res => this.addChannel(res));
  }

  public get channelName() : string
  {
    return this._channelName;
  }

  private addChannel(res)
  {
    this.channel = res;
  }
}
