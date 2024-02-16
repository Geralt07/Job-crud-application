import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
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
