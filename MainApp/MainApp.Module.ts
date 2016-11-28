import { NgModule }      from '@angular/core';
import { Http, HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal.js';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';

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
import { VideosComponent }   from './Components/Rest/Videos/Videos.Component';
import { FollowersComponent }   from './Components/Rest/Followers/Followers.Component';

import { SafePipe, SafeStylePipe } from './Pipes/SafePipe';
import { UrlPipe } from './Pipes/UrlPipe';
import { TwitchMarkdownPipe } from './Pipes/TwitchMarkdownPipe';
import { LengthFromSecondsPipe } from './Pipes/LengthFromSeconds';
import { StringDateToVisibleDatePipe, OnlyDatePipe } from './Pipes/StringDateToVisibleDate';

import { RestService }   from './Services/Rest.Service';
import { AuthorizationService }   from './Services/Authorization.Service';
import { FollowerNotificationService }   from './Services/FollowerNotification.Service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'channels', redirectTo: 'channels/overview', pathMatch: 'full' },
  { path: 'channels/overview', component: ChannelComponent },
  { path: 'channels/feed', component: FeedComponent },
  { path: 'channels/edit', component: ChannelOverviewComponent },
  { path: 'channels/videos', component: VideosComponent },
  { path: 'channels/follower', component: FollowersComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    Ng2Bs3ModalModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SimpleNotificationsModule
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
    VideosComponent,
    FollowersComponent,
    UrlPipe,
    SafePipe,
    TwitchMarkdownPipe,
    LengthFromSecondsPipe,
    StringDateToVisibleDatePipe,
    SafeStylePipe,
    OnlyDatePipe
  ],
  providers: [
    AuthorizationService,
    RestService,
    AuthorizationService,
    FollowerNotificationService,
    HttpModule
  ],
  bootstrap:    [ MainAppComponent ]
})
export class MainAppModule { }
