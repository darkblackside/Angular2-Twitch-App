import { Injectable } from '@angular/core';

import { Settings } from '../Settings';
import { AuthorizationService } from './Authorization.Service';
import { RestService } from './Rest.Service';
import { NotificationsService } from 'angular2-notifications';

import { FollowingObject } from '../Models/Rest/Followers/FollowingObject';
import { FollowersResult } from '../Models/Rest/Followers/FollowersResult';
import { FollowersGet } from '../Models/Rest/Followers/Followers';

@Injectable()
export class FollowerNotificationService
{
  public followers: Array<FollowingObject>;
  public nextCursor: string;
  public lastLatestFollower: Date;
  public latestFollower: Date;

  public constructor(private restService: RestService, private authService: AuthorizationService, private notificationService: NotificationsService) {}

  public GetLatestFollowers()
  {
    if(this.nextCursor)
    {
      this.restService.RestCall<FollowersGet>(new FollowersGet(this.authService.DefaultChannel, this.nextCursor)).subscribe(res => this.getLatestFollowers(res));
    }
    else
    {
      this.restService.RestCall<FollowersGet>(new FollowersGet(this.authService.DefaultChannel)).subscribe(res => this.getLatestFollowers(res));
    }
  }

  private getLatestFollowers(res)
  {

    this.nextCursor = res.Output._cursor;

    let finished = false;

    for(let follower of res.Output.follows)
    {
      if(!this.latestFollower)
      {
        this.latestFollower = new Date(follower.created_at);
      }

      if(this.lastLatestFollower && new Date(follower.created_at) < new Date(this.lastLatestFollower))
      {
        finished = true;
      }
    }

    if(!finished || !this.nextCursor)
    {
      this.lastLatestFollower = this.latestFollower;
      this.latestFollower = null;
      this.authService.LastLatestFollowerDate = this.lastLatestFollower;
    }
    else
    {
      this.GetLatestFollowers();
    }
  }
}
