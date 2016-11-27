import { FeedPost } from './FeedPost'

export class FeedResult
{
  _total: number;
  _cursor: string;
  posts: Array<FeedPost>;
}
