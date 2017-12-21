import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { TeamService } from '../team.service';

@Component({
  selector: 'vp-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'The Dream Team Members:';
  members: Member[];
  selectedMember: Member;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.getMembers();
    console.log('Team are gathered! ');
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
  getMembers(): void {
    this.teamService.getMembersList()
      .subscribe( memberList => this.members = memberList) ;
  }
}
