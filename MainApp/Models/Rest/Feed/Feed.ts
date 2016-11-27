import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { Dictionary } from '../../Dictionary';

import { FeedResult } from './FeedResult';
import { FeedRequest } from './FeedRequest';
import { FeedPostResult } from './FeedPostResult';

export class FeedGet implements RestModel
{
  public get Url() { return Settings.GetFeedsUrl(this.channelname); };
  public get Method() { return RestMethod.GET };

  public Input = null;
  public Output = new FeedResult();

  protected channelname: string;

  public constructor(channelname: string)
  {
    this.channelname = channelname;
  }

  public GetHeaderValues() { return ""; }
}


export class FeedPost implements RestModel
{
  public get Url() { return Settings.GetFeedsUrl(this.channelname) };
  public get Method() { return RestMethod.POST };
  public Input: FeedRequest;
  public Output: FeedPostResult;

  private channelname: string;

  public constructor(channelname: string, content: string, share: boolean = false)
  {
    this.channelname = channelname;

    this.Input = new FeedRequest(content, share);
    this.Output = new FeedPostResult();
  }

  public GetHeaderValues() { return ""; }
}

export class FeedDelete implements RestModel
{
  public get Url() { return Settings.GetFeedsDeleteUrl(this.channelname, this.postid); };
  public get Method() { return RestMethod.DELETE };
  public Input: any;
  public Output: any;

  private channelname: string;
  private postid: string;

  public constructor(channelname: string, postid: string)
  {
    this.channelname = channelname;
    this.postid = postid;
  }

  public GetHeaderValues() { return ""; }
}
