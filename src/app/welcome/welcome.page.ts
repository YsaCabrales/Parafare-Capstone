import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  getStartedBtn() {
    this.route.navigate(['/welcome-tour']);
  }

}
