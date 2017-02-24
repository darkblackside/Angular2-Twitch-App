import { ChattersContainer } from './ChattersContainer'
import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { Dictionary } from '../../Dictionary';

export class ChattersGet implements RestModel
{
  public get Url() { return Settings.GetChattersUrl(this.channelname); };
  public get Method() { return RestMethod.GET };

  public Input = null;
  public Output = new ChattersContainer();

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
