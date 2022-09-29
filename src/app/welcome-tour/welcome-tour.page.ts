import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-tour',
  templateUrl: './welcome-tour.page.html',
  styleUrls: ['./welcome-tour.page.scss'],
})
export class WelcomeTourPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.route.navigate(['/sign-up']);
  }


}
