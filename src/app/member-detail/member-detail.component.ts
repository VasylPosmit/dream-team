import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'vp-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;
  
  constructor() { }

  ngOnInit() {
  }

}
