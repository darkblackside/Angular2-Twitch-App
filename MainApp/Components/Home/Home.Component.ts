import { Component, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { Settings } from '../../Settings';
import { AuthorizationService } from '../../Services/Authorization.Service'
import { SafePipe } from '../../Pipes/SafePipe'

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'twitch-mainapp',
  templateUrl: 'MainApp/Components/Home/Home.html'
})
export class HomeComponent implements OnInit
{
  public constructor(private authService: AuthorizationService) {}

  public authToken: string;

  public initialized = false;

  public FullUrl = "";

  @ViewChild('modal')
  modal: ModalComponent;

  public ngOnInit()
  {
    this.authToken = this.authService.Authorization;

    if(!this.authToken)
    {
      this.edit();
    }
    else
    {
      this.initialized = true;
    }
  }

  public edit()
  {
    this.initialized = false;
    this.modal.open();
    this.FullUrl = Settings.AuthUrl
  }

  public reset()
  {
    this.authService.Authorization = null;
    this.authService.Channels = null;

    location.reload();
  }

  public save()
  {
    this.modal.close();

    this.authService.Authorization = this.authToken;

    this.initialized = true;
  }
}
