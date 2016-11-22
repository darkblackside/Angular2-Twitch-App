import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { Dictionary } from '../../Dictionary';

import { ChannelResult } from './ChannelResult';

export class ChannelGet implements RestModel
{
  public get Url() { return Settings.GetChannelsUrl(this.channelname) };
  public get Method() { return RestMethod.GET };
  public HeaderValues = new Dictionary<string, string>();

  public Input = null;
  public Output = new ChannelResult();

  private channelname: string;

  public constructor(channelname: string)
  {
    this.channelname = channelname;
  }

  public GetHeaderValues() : string
  {
    let result = "?";
    for(let key of this.HeaderValues.keys)
    {
      result += key + "=" + this.HeaderValues.Get(key) + "&";
    }

    return result;
  }
}
