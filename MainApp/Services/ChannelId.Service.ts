import { Dictionary } from '../Models/Dictionary';
import { RestService } from './Rest.Service';
import { ChannelIdGet } from '../Models/Rest/Channel/ChannelId/ChannelIdGet';
import { Observable } from 'rxjs/Rx';

export class ChannelIdService
{
  channelToId: Dictionary<string, number>;

  public constructor(private restService: RestService)
  {
    this.channelToId = new Dictionary<string, number>();
  }

  public GetUserId(channelname: string)
  {
    if(this.channelToId.Get(channelname) != null)
    {
      return this.channelToId.Get(channelname);
    }
    else if(localStorage.getItem("kraken.ChannelToId."+channelname) != undefined
            && localStorage.getItem("kraken.ChannelToId."+channelname) != null
            && localStorage.getItem("kraken.ChannelToId."+channelname) != "0")
    {
      this.channelToId.Add(channelname, +localStorage.getItem("kraken.ChannelToId."+channelname));
      return localStorage.getItem("kraken.ChannelToId."+channelname);
    }
    else
    {
      this.restService.RestCall<ChannelIdGet>(new ChannelIdGet(channelname)).subscribe(res => this.GetChannel(channelname, res));

      return this.GetUserId(channelname);
    }
  }

  private GetChannel(channelname: string, res)
  {
    localStorage.setItem("kraken.ChannelToId."+channelname, res.Output._id);
    this.channelToId.Add(channelname, res.Output._id);
  }
}
