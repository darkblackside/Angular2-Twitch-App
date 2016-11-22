import { Settings } from '../../../Settings';
import { RestMethod } from '../RestMethod';
import { RestModel } from '../RestModel';
import { TokenResult } from './TokenResult';
import { Dictionary } from '../../Dictionary';

export class TokenGet implements RestModel
{
  public get Url() { return Settings.AuthGrantedUrl };
  public get Method() { return RestMethod.GET };
  public HeaderValues = new Dictionary<string, string>();

  public Input = null;
  public Output = new TokenResult();

  public GetHeaderValues() : string
  {
    let result = "?";
    for(let key of this.HeaderValues.keys)
    {
      result += key + "=" + this.HeaderValues.Get(key) + "&";
    }

    return result;
  }
}
