import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-team';

@Component({
  selector: 'vp-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'The Dream Team Members:';
  members = MEMBERS;
  member: Member = {
    birthday: new Date(1988, 3, 15), // April 15, 1988
    id: 2,
    name: 'Jurii Kurilchuk',
    nickName: 'Bumbox',
    skills: ['design', 'infographincs'],
  };
  selectedMember: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
  constructor() { }

  ngOnInit() {
    console.log('TeamComponent init: ');
  }

}
