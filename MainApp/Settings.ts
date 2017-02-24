export class Settings
{
  public static BaseUrl = "https://api.twitch.tv/kraken/";
  public static ChatBaseUrl = "http://tmi.twitch.tv/"

  public static AuthGrantedUrl = Settings.BaseUrl + "oauth2/token";
  public static ClientID = "eoiygvgy4rlmtlgu58nt83sr8w4z82h";
  public static RestAccepts = "application/vnd.twitchtv5+json";
  public static ChannelBaseUrl = Settings.BaseUrl + "channel";
  public static ContentType = "application/json";
  private static _channelsUrl = Settings.BaseUrl + "channels/:channelname";
  private static _feedsUrl = Settings.BaseUrl + "feed/:channelname/posts";
  private static _feedsDeleteUrl = Settings._feedsUrl + "/:id";
  private static _channelVideosUrl = Settings.BaseUrl + "channels/:channelname/videos";
  private static _channelFollowersUrl = Settings.BaseUrl + "channels/:channelname/follows";
  private static _streamEmbedUrl = "http://player.twitch.tv/?channel=:channelname";
  private static _chattersUrl = Settings.ChatBaseUrl + "group/user/:channelname/chatters";
  private static _usersUrl = Settings.BaseUrl + "users?login=:channelname";
  public static AuthUrl = Settings.BaseUrl + "oauth2/authorize?response_type=code&client_id=" + Settings.ClientID + "&redirect_uri=http://softair-sundern.de/twitch-api/getKey.php&scope=user_read+user_blocks_edit+user_blocks_read+user_follows_edit+channel_read+channel_editor+channel_commercial+channel_stream+channel_subscriptions+user_subscriptions+channel_check_subscription+chat_login+channel_feed_read+channel_feed_edit&state=login_token"

  public static DisplayChat = true;

  public static GetChannelsUrl(channelName: string)
  {
    return this._channelsUrl.replace(":channelname", channelName);
  }

  public static GetFeedsUrl(channelName: string)
  {
    return this._feedsUrl.replace(":channelname", channelName);
  }

  public static GetFeedsDeleteUrl(channelName: string, postId: string)
  {
    return this._feedsDeleteUrl.replace(":channelname", channelName).replace(":id", postId);
  }

  public static GetChannelVideosUrl(channelName: string)
  {
    return this._channelVideosUrl.replace(":channelname", channelName);
  }

  public static GetFollowersUrl(channelName: string)
  {
    return this._channelFollowersUrl.replace(":channelname", channelName);
  }

  public static GetStreamEmbedUrl(channelName: string)
  {
    return this._streamEmbedUrl.replace(":channelname", channelName);
  }

  public static GetChattersUrl(channelName: string)
  {
    return this._chattersUrl.replace(":channelname", channelName);
  }

  public static GetUserUrl(channelName: string)
  {
    return this._usersUrl.replace(":channelname", channelName);
  }
}
