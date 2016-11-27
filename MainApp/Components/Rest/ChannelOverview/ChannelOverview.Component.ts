import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';
import { AuthorizationService } from '../../../Services/Authorization.Service';
import { RestService } from '../../../Services/Rest.Service';
import { ChannelGet } from '../../../Models/Rest/Channel/Channel';
import { ChannelResult } from '../../../Models/Rest/Channel/ChannelResult';

@Component({
  selector: 'edit-channels',
  templateUrl: 'MainApp/Components/Rest/ChannelOverview/ChannelOverview.html',
  styleUrls: [ 'node_modules/bootstrap/dist/css/bootstrap.min.css',
               'MainApp/Components/Rest/ChannelOverview/channeloverview.css']
})
export class ChannelOverviewComponent implements OnInit
{
  public constructor(private authService: AuthorizationService, private restService: RestService) {}

  public channels: Array<string>;
  public editChannel: string;
  public defaultchannel: string;

  public ngOnInit()
  {
    this.channels = this.authService.Channels;
    this.defaultchannel = this.authService.DefaultChannel;
  }

  public addChannel(channelName = "EDITME")
  {
    this.channels.push(channelName);
    this.saveChannels();
  }

  public removeChannel(channelindex: number)
  {
    if(this.defaultchannel == this.channels[channelindex])
    {
      this.removeDefault();
    }
    this.channels.splice(channelindex, 1);
    this.saveChannels();
  }

  public overwrite(channelindex: number)
  {
    this.channels[channelindex] = this.editChannel;
    this.editChannel = null;
    this.saveChannels();
  }

  public editDefault(channel: number)
  {
    this.defaultchannel = this.channels[channel];
    this.saveChannels();
  }

  public removeDefault()
  {
    this.defaultchannel = null;
    this.saveChannels();
  }

  public saveChannels()
  {
    this.authService.Channels = this.channels;
    this.authService.DefaultChannel = this.defaultchannel;
  }
}
