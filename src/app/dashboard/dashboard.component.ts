import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { TeamService } from '../team.service';

@Component({
  selector: 'vp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  members: Member[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.teamService.getMembersList()
      .subscribe(team => this.members = team.slice(1, 5));
  }
}
