export class FeedRequest
{
  content: string;
  share: boolean;

  public constructor(content: string, share: boolean)
  {
    this.content = content;
    this.share = share;
  }
}
