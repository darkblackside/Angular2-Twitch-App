import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { RestModel } from '../Models/Rest/RestModel';
import { RestMethod } from '../Models/Rest/RestMethod';
import { Settings } from '../Settings';

import { AuthorizationService } from './Authorization.Service';

@Injectable()
export class RestService
{
  public constructor(private authService: AuthorizationService, private httpService: Http) {}

  public RestCall<T extends RestModel>(arg: T) : Observable<T>
  {
    switch(arg.Method)
    {
      case RestMethod.GET: return this.getCall<T>(arg);
      case RestMethod.POST: return this.postCall<T>(arg);
      case RestMethod.PUT: return this.putCall<T>(arg);
      case RestMethod.DELETE: return this.deleteCall<T>(arg);
    }
  }

  private getCall<T extends RestModel>(arg: T) : Observable<T>
  {


    return this.httpService.get(arg.Url + arg.GetHeaderValues(), this.getRequestOptions(arg.Input))
                           .map(res => this.resOutputMapper<T>(res, arg));
  }

  private postCall<T extends RestModel>(arg: T) : Observable<T>
  {
    return this.httpService.post(arg.Url + arg.GetHeaderValues(), JSON.stringify(arg.Input), this.getRequestOptions())
                           .map(res => this.resOutputMapper<T>(res, arg));
  }

  private putCall<T extends RestModel>(arg: T) : Observable<T>
  {
    return this.httpService.put(arg.Url + arg.GetHeaderValues(), JSON.stringify(arg.Input), this.getRequestOptions())
                           .map(res => this.resOutputMapper<T>(res, arg));
  }

  private deleteCall<T extends RestModel>(arg: T) : Observable<T>
  {
    return this.httpService.delete(arg.Url + arg.GetHeaderValues(), this.getRequestOptions())
                           .map(res => this.generateNull<T>());
  }

  private resOutputMapper<T extends RestModel>(res, toFill: T) : T
  {
    if(toFill)
    {
      toFill.Output = Object.assign(toFill.Output, res.json());
    }
    return toFill;
  }

  private generateNull<T extends RestModel>() : T
  {
    return null;
  }

  private getHeaders() : Headers
  {
    var result = new Headers();

    result.append('Accept', Settings.RestAccepts);
    result.append('Content-Type', Settings.ContentType);
    result.append('Client-ID', Settings.ClientID);
    result.append('Authorization', this.authService.Authorization);

    return result;
  }

  private getRequestOptions(objToSend: any = null) : RequestOptionsArgs
  {
    if(objToSend)
    {
      return {
        headers: this.getHeaders(),
        body: this.objectToBodyUrlEncoded(objToSend),
      };
    }
    return {
      headers: this.getHeaders()
    };
  }

  private objectToBodyUrlEncoded(toDeserialize: any): string
  {
    let result = "";
    for(var key of toDeserialize)
    {
      result += key + "=" + toDeserialize[key] + "&";
    }
    return result;
  }
}
