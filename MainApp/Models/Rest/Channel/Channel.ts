import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { Dictionary } from '../../Dictionary';

import { ChannelResult } from './ChannelResult';
import { ChannelRequest } from './ChannelRequest';

export class ChannelGet implements RestModel
{
  public get Url() { return Settings.GetChannelsUrl(this.channelname)+"?noCache="+Math.floor(Math.random()*100); };
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
    let result = "";

    if(this.HeaderValues.keys.length > 0)
    {
      let result = "?";
      for(let key of this.HeaderValues.keys)
      {
        result += key + "=" + this.HeaderValues.Get(key) + "&";
      }
    }

    return result;
  }
}


export class ChannelPut extends ChannelGet
{
  public get Method() { return RestMethod.PUT };
  public Input: ChannelRequest;

  public constructor(channelname: string, mature: boolean = null, status: string = null, game: string = null, delay: number = null, channel_feed_enabled: boolean = null, broadcaster_language: string = null)
  {
    super(channelname);

    this.Input = new ChannelRequest(mature, status, game, delay, channel_feed_enabled, broadcaster_language);
  }
}
