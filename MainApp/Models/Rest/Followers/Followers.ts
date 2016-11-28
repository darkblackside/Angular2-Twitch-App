import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { Dictionary } from '../../Dictionary';

import { FollowersResult } from './FollowersResult'

export class FollowersGet implements RestModel
{
  public get Url() { return Settings.GetFollowersUrl(this.channelname); };
  public get Method() { return RestMethod.GET };
  public HeaderValues = new Dictionary<string, string>();

  public Input = null;
  public Output = new FollowersResult();

  private channelname: string;

  public constructor(channelname: string, cursor = null, offset = 0, limit = 100)
  {
    this.channelname = channelname;

    this.HeaderValues.Add("limit", limit.toString());
    this.HeaderValues.Add("offset", offset.toString());

    if(cursor)
    {
      this.HeaderValues.Add("cursor", cursor.toString());
    }
  }

  public GetHeaderValues() : string
  {
    return this.HeaderValues.GetAsHeaderValues();
  }
}
