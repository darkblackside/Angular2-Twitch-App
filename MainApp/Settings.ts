export class Settings
{
  public static BaseUrl = "https://api.twitch.tv/kraken/";

  public static AuthGrantedUrl = Settings.BaseUrl + "oauth2/token";
  public static ClientID = "eoiygvgy4rlmtlgu58nt83sr8w4z82h";
  public static RestAccepts = "application/vnd.twitchtv3+json";
  public static ChannelBaseUrl = Settings.BaseUrl + "channel";
  public static ContentType = "application/json";
  private static _channelsUrl = Settings.BaseUrl + "channels/:channelname";
  public static AuthUrl = Settings.BaseUrl + "oauth2/authorize?response_type=code&client_id=" + Settings.ClientID + "&redirect_uri=http://darklight-minecraft.de/test.php&scope=user_read+user_blocks_edit+user_blocks_read+user_follows_edit+channel_read+channel_editor+channel_commercial+channel_stream+channel_subscriptions+user_subscriptions+channel_check_subscription+chat_login+channel_feed_read+channel_feed_edit&state=login_token"

  public static GetChannelsUrl(channelName: string)
  {
    return this._channelsUrl.replace(":channelname", channelName);
  }
}
