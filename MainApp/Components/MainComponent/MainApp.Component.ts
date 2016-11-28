import { Component, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

import { Settings } from '../../Settings';
import { AuthorizationService } from '../../Services/Authorization.Service'
import { SafePipe } from '../../Pipes/SafePipe'

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'twitch-mainapp',
  templateUrl: 'MainApp/Components/MainComponent/MainApp.html',
  styleUrls: ['MainApp/Components/MainComponent/mainAppStyle.css']
})
export class MainAppComponent
{
  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  }

  public constructor(private notificationService: NotificationsService) {}
}
