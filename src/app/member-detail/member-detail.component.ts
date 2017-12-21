import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Member } from '../member';
import { TeamService }  from '../team.service';

@Component({
  selector: 'vp-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getMember();
  }
  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getMember(id)
      .subscribe(member => this.member = member);
  }
  goBack(): void {
    this.location.back();
  }
}
