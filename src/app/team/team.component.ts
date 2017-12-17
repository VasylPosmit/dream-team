import { Component, OnInit } from '@angular/core';
import { Member } from 'member';

@Component({
  selector: 'vp-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  member: Member = {
    birthday: new Date(1988, 3, 15), // April 15, 1988
    id: 2,
    name: 'Jurii Kurilchuk',
    nickName: 'Bumbox',
    skills: ['design', 'infographincs'],
  };

  constructor() { }

  ngOnInit() {
    console.log('TeamComponent init: ');
  }

}
