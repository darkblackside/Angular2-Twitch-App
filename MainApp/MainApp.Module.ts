import { NgModule }      from '@angular/core';
import { Http, HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal.js';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { MainAppComponent }   from './Components/MainComponent/MainApp.Component';
import { ChannelOverviewComponent }   from './Components/Rest/ChannelOverview/ChannelOverview.Component';
import { ChannelComponent }   from './Components/Rest/Channel/Channel.Component';
import { ChannelDetailsComponent }   from './Components/Rest/ChannelDetails/ChannelDetails.Component';
import { MainNaviComponent }   from './Components/MainNavi/MainNavi.Component';
import { SecondNaviComponent }   from './Components/SecondNavi/SecondNavi.Component';
import { HomeComponent }   from './Components/Home/Home.Component';
import { ChannelSwitcherComponent }   from './Components/ChannelSwitcher/ChannelSwitcher.Component';
import { ChatComponent }   from './Components/Chat/Chat.Component';
import { FeedComponent }   from './Components/Rest/Feed/Feed.Component';
import { SafePipe } from './Pipes/SafePipe';
import { UrlPipe } from './Pipes/UrlPipe';
import { TwitchMarkdownPipe } from './Pipes/TwitchMarkdownPipe';

import { RestService }   from './Services/Rest.Service';
import { AuthorizationService }   from './Services/Authorization.Service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'channels', redirectTo: 'channels/overview', pathMatch: 'full' },
  { path: 'channels/overview', component: ChannelComponent },
  { path: 'channels/feed', component: FeedComponent },
  { path: 'channels/edit', component: ChannelOverviewComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    Ng2Bs3ModalModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MainAppComponent,
    ChannelOverviewComponent,
    ChannelComponent,
    MainNaviComponent,
    SecondNaviComponent,
    HomeComponent,
    ChannelDetailsComponent,
    ChannelSwitcherComponent,
    ChatComponent,
    FeedComponent,
    UrlPipe,
    SafePipe,
    TwitchMarkdownPipe
  ],
  providers: [
    AuthorizationService,
    RestService,
    AuthorizationService,
    HttpModule
  ],
  bootstrap:    [ MainAppComponent ]
})
export class MainAppModule { }
