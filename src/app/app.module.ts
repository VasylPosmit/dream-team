import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './common/message.service';
import { TeamComponent } from './team/team.component';
import { TeamService } from './common/team.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TeamService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
