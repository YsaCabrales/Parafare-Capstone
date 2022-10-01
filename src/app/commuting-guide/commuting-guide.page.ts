import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commuting-guide',
  templateUrl: './commuting-guide.page.html',
  styleUrls: ['./commuting-guide.page.scss'],
})
export class CommutingGuidePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  jeepneyGuide() {
    this.route.navigate(['/jeepney-guide']);
  }

  tricycleGuide() {
    this.route.navigate(['/tricycle-guide']);
  }

  busGuide() {
    this.route.navigate(['/bus-guide']);
  }

  walkGuide() {
    this.route.navigate(['/walk-guide']);
  }

  scamGuide() {
    this.route.navigate(['/scam-guide']);
  }
}
