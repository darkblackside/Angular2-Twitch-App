import { ChannelResult } from './ChannelResult';
import '../EditableDecorator';

export class ChannelRequest
{
  public channel: any;

  public constructor(channel: ChannelResult)
  {
    this.channel = channel.ToInput();
  }
}
