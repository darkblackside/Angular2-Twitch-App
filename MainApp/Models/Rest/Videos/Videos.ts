import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { Dictionary } from '../../Dictionary';

import { Video } from './Video';
import { VideosResult } from './VideosResult';

export class ChannelVideosGet implements RestModel
{
  public get Url() { return Settings.GetChannelVideosUrl(this.channelname); };
  public get Method() { return RestMethod.GET };
  public HeaderValues = new Dictionary<string, string>();

  public Input = null;
  public Output = new VideosResult();

  private channelname: string;

  public constructor(channelname: string, onlyBroadcasts = true, offset = 0, limit = 100)
  {
    this.channelname = channelname;

    this.HeaderValues.Add("broadcasts", onlyBroadcasts.toString());
    this.HeaderValues.Add("offset", offset.toString());
    this.HeaderValues.Add("limit", limit.toString());
  }

  public GetHeaderValues() : string
  {
    return this.HeaderValues.GetAsHeaderValues();
  }
}
