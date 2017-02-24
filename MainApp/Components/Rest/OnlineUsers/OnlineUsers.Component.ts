import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';
import { RestService } from '../../../Services/Rest.Service';
import { ChattersGet } from '../../../Models/Rest/Chatters/ChattersGet';

@Component({
  selector: 'online-users',
  templateUrl: 'MainApp/Components/Rest/OnlineUsers/users.html',
  styleUrls: ['MainApp/Components/Rest/OnlineUsers/users.css']
})
export class OnlineUsersComponent implements OnInit
{
  public showStream: boolean;
  public chatters: Observable<ChattersGet>;

  @Input()
  public channelname: string;

  public constructor(private restService: RestService)
  {

  }

  public ngOnInit()
  {
    this.LoadAll();
  }

  public LoadAll()
  {
    this.chatters = this.restService.RestCall<ChattersGet>(new ChattersGet(this.channelname));
  }
}
