import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/catch';

import { Settings } from '../../Settings';
import { AuthorizationService } from '../../Services/Authorization.Service';
import { Navigation } from '../../Models/Navigation';

@Component({
  selector: 'navi-top',
  templateUrl: 'MainApp/Components/SecondNavi/SecondNavi.html',
  styleUrls: ['MainApp/Components/SecondNavi/secondNaviStyle.css']
})
export class SecondNaviComponent implements OnInit
{
  public constructor(private authService: AuthorizationService) {}

  public secondNavi: Navigation;

  public ngOnInit()
  {
    if(!this.secondNavi)
    {
      this.secondNavi = new Navigation("Secondnavi");
    }
  }
}
