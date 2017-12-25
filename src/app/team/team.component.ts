import { Component, OnInit } from '@angular/core';

import { Member } from '../common/member';
import { TeamService } from '../common/team.service';

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

  getMembers(): void {
    this.teamService.getMembersList()
      .subscribe( memberList => this.members = memberList) ;
  }
  add(name: string, nickName: string): void {
    name = name.trim();
    if (!name) { return; }
    this.teamService.addMember({ name, nickName } as Hero)
      .subscribe(member => {
        this.members.push(member);
      });
  }
}
