import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../Settings';
import { AuthorizationService } from '../../Services/Authorization.Service';
import { RestService } from '../../Services/Rest.Service';
import { SafePipe } from '../../Pipes/SafePipe'

@Component({
  selector: 'chat',
  templateUrl: 'MainApp/Components/Chat/Chat.html',
  styleUrls: [ 'node_modules/bootstrap/dist/css/bootstrap.min.css',
               'MainApp/Components/Chat/Chat.css' ]
})
export class ChatComponent
{
  @Input()
  public Channel;

  public DisplayChat = Settings.DisplayChat;

  public get FullUrl() : string
  {
    return "http://www.twitch.tv/" + this.Channel + "/chat";
  }
}
