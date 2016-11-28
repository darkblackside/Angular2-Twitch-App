import { FollowingObject } from './FollowingObject';

export class FollowersResult
{
  _total: number;
  _cursor: string;
  follows: Array<FollowingObject>;
}
