import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  homePage() {
    this.router.navigate(['home-page']);
  }
  
    constructor(private router: Router){}
    createJob() {
      this.router.navigate(['create-job']);
    }
    jobList() {
      this.router.navigate(['jobs']);
    }
}
