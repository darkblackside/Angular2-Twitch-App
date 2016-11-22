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
  selector: 'channels',
  templateUrl: 'MainApp/Components/Rest/Channel/Channel.html',
  styleUrls: [ 'node_modules/bootstrap/dist/css/bootstrap.min.css' ]
})
export class ChannelComponent implements OnInit
{
  public constructor(private authService: AuthorizationService, private restService: RestService) {}

  public channels: Array<string>;
  public defaultchannel: string;
  public detailschannel: string;

  public ngOnInit()
  {
    this.channels = this.authService.Channels;
    this.defaultchannel = this.authService.DefaultChannel;

    this.detailschannel = this.defaultchannel;
  }
}
