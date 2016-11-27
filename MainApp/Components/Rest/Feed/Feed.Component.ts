import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../../Settings';
import { AuthorizationService } from '../../../Services/Authorization.Service';
import { RestService } from '../../../Services/Rest.Service';
import { FeedGet, FeedPost, FeedDelete } from '../../../Models/Rest/Feed/Feed';
import { FeedResult } from '../../../Models/Rest/Feed/FeedResult';
import { FeedPostResult } from '../../../Models/Rest/Feed/FeedPostResult';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'feed',
  templateUrl: 'MainApp/Components/Rest/Feed/Feed.html',
  styleUrls: ['MainApp/Components/Rest/Feed/feed.css']
})
export class FeedComponent
{
  private _channelName: string;

  feeds: FeedGet;

  newFeed: string;
  newFeedUseTwitter: boolean;

  postToDelete: string;

  @ViewChild('modal')
  modal: ModalComponent;

  public constructor(private authService: AuthorizationService, private restService: RestService)
  {
  }

  @Input()
  public set channelName(value: string)
  {
    this._channelName = value;
    this.reloadData();
  }

  public NewPost()
  {
    this.restService.RestCall<FeedPost>(new FeedPost(this._channelName, this.newFeed, this.newFeedUseTwitter)).subscribe(res => this.addFeed(res));
  }

  public DeleteModal(identifier: string)
  {
    this.postToDelete = identifier;
    this.modal.open();
  }

  public DeletePost()
  {
    if(this.postToDelete)
    {
      this.restService.RestCall<FeedDelete>(new FeedDelete(this._channelName, this.postToDelete)).subscribe(res => this.reloadData());
    }

    this.modal.close();
  }

  public DontDelete()
  {
    this.postToDelete = "";
    this.modal.dismiss();
  }

  private addFeeds(res : FeedGet)
  {
    this.feeds = res;
  }

  private addFeed(res)
  {
    console.log(res);

    this.feeds.Output.posts.splice(0, 0, res.Output.post);
  }

  private reloadData()
  {
    this.restService.RestCall<FeedGet>(new FeedGet(this._channelName)).subscribe(res => this.addFeeds(res));
  }
}
