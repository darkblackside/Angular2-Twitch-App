import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';
import { AuthorizationService } from '../../../Services/Authorization.Service';
import { RestService } from '../../../Services/Rest.Service';
import { FollowersGet } from '../../../Models/Rest/Followers/Followers';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'followers',
  templateUrl: 'MainApp/Components/Rest/Followers/Followers.html',
  styleUrls: ['MainApp/Components/Rest/Followers/followers.css']
})
export class FollowersComponent
{
  private _channelName: string;

  public followers: FollowersGet;
  public raster = true;

  public constructor(private authService: AuthorizationService, private restService: RestService, private notificationService: NotificationsService)
  {
  }

  @Input()
  public set channelName(value: string)
  {
    this._channelName = value;
    this.reloadData();
  }

  public NextPage()
  {
    if(this.followers.Output._cursor)
    {
      this.restService.RestCall<FollowersGet>(new FollowersGet(this._channelName, this.followers.Output._cursor)).subscribe(res => this.addFollowers(res));
    }
  }

  public LoadAll()
  {
    this.restService.RestCall<FollowersGet>(new FollowersGet(this._channelName, this.followers.Output._cursor)).subscribe(res => this.addFollowersLoadNext(res));
  }

  private reloadData()
  {
    this.restService.RestCall<FollowersGet>(new FollowersGet(this._channelName)).subscribe(res => this.newResult(res));
  }

  private newResult(res)
  {
    this.followers = res;
  }

  private addFollowersLoadNext(res)
  {
    this.addFollowers(res);

    if(this.followers.Output._cursor)
    {
      this.LoadAll();
    }
  }

  private addFollowers(res)
  {
    if(!this.followers)
    {
      this.followers = res;
    }
    else
    {
      this.followers.Output._cursor = res.Output._cursor;

      for(let follower of res.Output.follows)
      {
        this.followers.Output.follows.push(follower);
      }
    }
  }
}
