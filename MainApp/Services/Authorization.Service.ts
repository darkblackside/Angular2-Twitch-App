import { Injectable } from '@angular/core';

import { Settings } from '../Settings';

@Injectable()
export class AuthorizationService
{
  private _authorization: string;
  private _defaultchannel: string;
  private _channelnames: Array<string>;
  private _lastLatestFollower: Date;

  public constructor()
  {
    this._defaultchannel = null;
  }

  public get Authorization() : string
  {
    if(!this._authorization && localStorage.getItem("kraken.AuthToken"))
    {
      this._authorization = localStorage.getItem("kraken.AuthToken");
    }

    return this._authorization;
  }
  public set Authorization(authValue: string)
  {
    if(authValue != "false" && authValue != null && authValue != "")
    {
      if(authValue.toLowerCase().indexOf("oauth") != -1)
      {
        this._authorization = authValue;
      }
      else
      {
        this._authorization = "OAuth " + authValue;
      }

      localStorage.setItem("kraken.AuthToken", this._authorization);
    }
    else
    {
      localStorage.removeItem("kraken.AuthToken");
      this._authorization = null;
    }
  }

  public get Channels() : Array<string>
  {
    if(!this._channelnames && localStorage.getItem("kraken.Channels"))
    {
      this._channelnames = JSON.parse(localStorage.getItem("kraken.Channels"));
    }
    else if(!this._channelnames)
    {
      this._channelnames = new Array<string>();
        localStorage.setItem("kraken.Channels", JSON.stringify(this._channelnames));
    }

    return this._channelnames;
  }
  public set Channels(channelnames: Array<string>)
  {
    if(channelnames != null && channelnames.length != 0)
    {
      localStorage.setItem("kraken.Channels", JSON.stringify(channelnames));
      this._channelnames = channelnames;
    }
    else
    {
      this._channelnames = new Array<string>();
      localStorage.removeItem("kraken.Channels");
    }
  }

  public get DefaultChannel() : string
  {
    if(!this._defaultchannel && localStorage.getItem("kraken.DefaultChannel"))
    {
      this._defaultchannel = JSON.parse(localStorage.getItem("kraken.DefaultChannel"));
    }
    else if(!this._defaultchannel)
    {
      if(this.Channels.length > 0)
      {
        this._defaultchannel = this.Channels[0];
        localStorage.setItem("kraken.DefaultChannel", JSON.stringify(this._defaultchannel));
      }
    }

    return this._defaultchannel;
  }
  public set DefaultChannel(defaultvalue: string)
  {
    if(defaultvalue != null && defaultvalue != "" && defaultvalue != "false")
    {
      localStorage.setItem("kraken.DefaultChannel", JSON.stringify(defaultvalue));
      this._defaultchannel = defaultvalue;
    }
    else
    {
      this._defaultchannel = null;
      localStorage.removeItem("kraken.DefaultChannel");
    }
  }

  public get LastLatestFollowerDate() : Date
  {
    if(!this._lastLatestFollower && localStorage.getItem("kraken.LastLatestFollowerDate"))
    {
      this._lastLatestFollower = JSON.parse(localStorage.getItem("kraken.LastLatestFollowerDate"));
    }

    return this._lastLatestFollower;
  }
  public set LastLatestFollowerDate(defaultvalue: Date)
  {
    if(defaultvalue != null)
    {
      localStorage.setItem("kraken.LastLatestFollowerDate", JSON.stringify(defaultvalue));
      this._lastLatestFollower = defaultvalue;
    }
    else
    {
      this._lastLatestFollower = null;
      localStorage.removeItem("kraken.LastLatestFollowerDate");
    }
  }
}
