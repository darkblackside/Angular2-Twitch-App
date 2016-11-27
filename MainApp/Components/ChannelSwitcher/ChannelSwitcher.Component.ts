import { Component, Output, EventEmitter } from '@angular/core';

import { AuthorizationService } from '../../Services/Authorization.Service';
import { RestService } from '../../Services/Rest.Service';


@Component({
  selector: 'channel-switcher',
  templateUrl: 'MainApp/Components/ChannelSwitcher/channelSwitcher.html',
  styleUrls: [ 'MainApp/Components/ChannelSwitcher/channelSwitcher.css' ]
})
export class ChannelSwitcherComponent
{
  public constructor(private authService: AuthorizationService, private restService: RestService) {}

  public channels: Array<string>;
  public defaultchannel: string;
  public detailschannel: string;

  @Output() channelSwitched = new EventEmitter();

  public ngOnInit()
  {
    this.channels = this.authService.Channels;
    this.defaultchannel = this.authService.DefaultChannel;

    this.detailschannel = this.defaultchannel;

    this.channelSwitched.emit(this.detailschannel);
  }

  public setDefault()
  {
    this.authService.DefaultChannel = this.detailschannel;

    this.channelSwitched.emit(this.detailschannel);
  }
}
