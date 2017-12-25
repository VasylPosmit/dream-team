import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService }  from './common/in-memory-data.service';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './common/message.service';
import { TeamComponent } from './team/team.component';
import { TeamService } from './common/team.service';
import { MemberSearchComponent } from './member-search/member-search.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TeamService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
