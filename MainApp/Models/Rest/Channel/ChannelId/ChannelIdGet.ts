import { Settings } from '../../../../Settings';
import { RestMethod } from '../../RestMethod';
import { RestModel } from '../../RestModel';
import { Dictionary } from '../../../Dictionary';
import { ChannelGetResult } from './ChannelGetResult';

export class ChannelIdGet implements RestModel
{
  public get Url() { return Settings.GetChannelsUrl(this.channelname)+"?noCache="+Math.floor(Math.random()*100); };
  public get Method() { return RestMethod.GET };
  public HeaderValues = new Dictionary<string, string>();

  public Input = null;
  public Output = new ChannelGetResult();

  private channelname: string;

  public constructor(channelname: string)
  {
    this.channelname = channelname;
  }

  public GetHeaderValues() : string
  {
    return "";
  }
}
