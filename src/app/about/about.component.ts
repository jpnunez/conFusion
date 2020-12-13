import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService} from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'diplay: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader [];
  leaderErrMess: string;

  selectedLeader: Leader;
  

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
    .subscribe(leaders => this.leaders = leaders),
    errMess => this.leaderErrMess = <any>errMess;
  }

}
