export class ChannelRequest
{
  public on_site = 1;
  public channel = {
    mature: null,
    game: null,
    status: null,
    delay: null,
    channel_feed_enabled: null,
    broadcaster_language: null,
    broadcaster_language_enabled: null
  };

  public constructor(mature: boolean, status: string, game: string, delay: number, channel_feed_enabled: boolean, broadcaster_language: string)
  {
    this.channel.mature = mature;
    this.channel.status = status;
    this.channel.game = game;
    this.channel.delay = delay;
    this.channel.channel_feed_enabled = channel_feed_enabled;

    if(broadcaster_language != null)
    {
      this.channel.broadcaster_language = broadcaster_language;
      this.channel.broadcaster_language_enabled = true;
    }
    else
    {
      this.channel.broadcaster_language = "en";
      this.channel.broadcaster_language_enabled = false;
    }
  }
}
