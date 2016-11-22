import { RestMethod } from './RestMethod';
import { Dictionary } from '../Dictionary';

export interface RestModel
{
  Url: string;
  Method: RestMethod;
  HeaderValues: Dictionary<string, string>;

  Input: any;
  Output: any;

  GetHeaderValues() : string;
}
