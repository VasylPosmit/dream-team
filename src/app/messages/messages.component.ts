import { Component, OnInit } from '@angular/core';

import { MessageService } from "../common/message.service";

@Component({
  selector: 'vp-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
