import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import {UserService} from '../services/user.service';

@Component({
  selector: 'chatseeker',
  templateUrl: './chatseeker.component.html',
  styleUrls: ['./chatseeker.component.scss']
})
export class ChatseekerComponent implements OnInit {

	NICK = localStorage.getItem('NICK');

  constructor(private router: Router, private userService: UserService, private cdRef:ChangeDetectorRef) {
  }
  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
