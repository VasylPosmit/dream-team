import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Member } from './member';
import { MEMBERS } from './team/mock-team';
import { MessageService } from './message.service';

@Injectable()
export class TeamService {
  constructor(private messageService: MessageService) { }

  getMembersList(): Observable<Member[]> {
    this.messageService.add('TeamService: fetched team members')
    return of(MEMBERS);
  }
}
