import { User } from '../User/User'

export class FeedPost
{
  id: string;
  created_at: string;
  deleted: boolean;
  emotes: Array<any>;
  reactions: Object;
  body: string;
  user: User;
}
