import { RestMethod } from './RestMethod';
import { Dictionary } from '../Dictionary';

export interface RestModel extends Object
{
  Url: string;
  Method: RestMethod;

  Input: any;
  Output: any;

  GetHeaderValues() : string;
}
