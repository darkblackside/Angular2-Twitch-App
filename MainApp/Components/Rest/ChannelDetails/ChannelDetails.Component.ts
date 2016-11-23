import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';
import { AuthorizationService } from '../../../Services/Authorization.Service';
import { RestService } from '../../../Services/Rest.Service';
import { ChannelGet, ChannelPut } from '../../../Models/Rest/Channel/Channel';
import { ChannelResult } from '../../../Models/Rest/Channel/ChannelResult';

@Component({
  selector: 'user-channel',
  templateUrl: 'MainApp/Components/Rest/ChannelDetails/ChannelDetails.html'
})
export class ChannelDetailsComponent
{
  private _channelName: string;

  channel: ChannelGet;

  @Input()
  public set channelName(value: string)
  {
    this._channelName = value;
    this.restService.RestCall<ChannelGet>(new ChannelGet(value)).subscribe(res => this.addChannel(res));
  }

  public constructor(private authService: AuthorizationService, private restService: RestService)
  {
  }

  public get channelName() : string
  {
    return this._channelName;
  }

  public saveChannel()
  {
    if(!this.channel.Output.partner)
    {
      this.channel.Output.delay = null;
    }

    let mature = this.channel.Output.mature;
    let status = this.channel.Output.status;
    let game = this.channel.Output.game;
    let delay = this.channel.Output.delay;
    let channelFeedEnabled = this.channel.Output.channel_feed_enabled;
    let language = this.channel.Output.broadcaster_language;

    let channelPut = new ChannelPut(this._channelName, mature, status, game, delay, channelFeedEnabled, language);
    this.restService.RestCall<ChannelPut>(channelPut).subscribe(res => this.addChannel(res));
  }

  public reloadChannel()
  {
    this.restService.RestCall<ChannelGet>(new ChannelGet(this._channelName)).subscribe(res => this.addChannel(res));
  }

  private addChannel(res)
  {
    this.channel = res;
  }
}
