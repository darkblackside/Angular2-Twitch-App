import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../Settings';
import { AuthorizationService } from '../../Services/Authorization.Service';
import { Navigation } from '../../Models/Navigation';
import { NavigationPoint } from '../../Models/NavigationPoint';
import { SecondNaviComponent } from '../SecondNavi/SecondNavi.Component';

@Component({
  selector: 'navi-main',
  templateUrl: 'MainApp/Components/MainNavi/Navi.html',
  styleUrls: ['MainApp/Components/MainNavi/mainNaviStyle.css']
})
export class MainNaviComponent implements OnInit
{
  public navigation: Navigation;

  @ViewChild(SecondNaviComponent) secondNavi: SecondNaviComponent

  public constructor(private authService: AuthorizationService, private router: RouterModule){ }

  public ngOnInit()
  {
    this.navigation = new Navigation("Main");
    let startNavi = new NavigationPoint("/home", "Startseite");
    this.navigation.Navipoints.push(startNavi);
    let channelNavi = new NavigationPoint("/channels", "Kanäle");
    this.navigation.Navipoints.push(channelNavi);

    startNavi.Child = new Navigation("Secondary");

    channelNavi.Child = new Navigation("Secondary");
    channelNavi.Child.Navipoints.push(new NavigationPoint("/channels/overview", "Übersicht"));
    channelNavi.Child.Navipoints.push(new NavigationPoint("/channels/feed", "Feed"));
    channelNavi.Child.Navipoints.push(new NavigationPoint("/channels/videos", "Videos"));
    channelNavi.Child.Navipoints.push(new NavigationPoint("/channels/follower", "Follower"));
    channelNavi.Child.Navipoints.push(new NavigationPoint("/channels/blocks", "Blacklist"));
    channelNavi.Child.Navipoints.push(new NavigationPoint("/channels/edit", "Kanäle verwalten"));
  }

  public assign(navi: Navigation)
  {
    this.secondNavi.secondNavi = navi;
  }
}
