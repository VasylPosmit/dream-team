import { Component, OnInit } from '@angular/core';
import { MEMBERS } from './mock-team';
import { Member } from '../member';

@Component({
  selector: 'vp-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title = 'The Dream Team Members:';
  members = MEMBERS;
  selectedMember: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
  constructor() { }

  ngOnInit() {
    console.log('TeamComponent init: ');
  }

}
