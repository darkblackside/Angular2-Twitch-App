import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';
import { AuthorizationService } from '../../../Services/Authorization.Service';
import { RestService } from '../../../Services/Rest.Service';
import { ChannelVideosGet } from '../../../Models/Rest/Videos/Videos';
import { FeedResult } from '../../../Models/Rest/Feed/FeedResult';
import { FeedPostResult } from '../../../Models/Rest/Feed/FeedPostResult';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'videos',
  templateUrl: 'MainApp/Components/Rest/Videos/Videos.html',
  styleUrls: ['MainApp/Components/Rest/Videos/videos.css']
})
export class VideosComponent
{
  private _channelName: string;

  public videos: ChannelVideosGet;
  public showBroadcasts = true;

  public constructor(private authService: AuthorizationService, private restService: RestService)
  {
  }

  @Input()
  public set channelName(value: string)
  {
    this._channelName = value;
    this.reloadData();
  }

  public ShowBroadcasts()
  {
    this.showBroadcasts = true;
    this.reloadData();
  }

  public ShowHighlights()
  {
    this.showBroadcasts = false;
    this.reloadData();
  }

  private reloadData()
  {
    this.restService.RestCall<ChannelVideosGet>(new ChannelVideosGet(this._channelName, this.showBroadcasts)).subscribe(res => this.addVideos(res));
  }

  private addVideos(res)
  {
    this.videos = res;
  }
}
