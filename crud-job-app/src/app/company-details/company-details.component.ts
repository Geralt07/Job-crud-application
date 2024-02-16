import { Component } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  jobs:Job[] | any;

  constructor(private jobService: JobService, private router: Router){}

  ngOnInit(){
    this.getJobs();
  }
  
  private getJobs() {
    this.jobService.getJobsList().subscribe(data => {
      this.jobs = data;
    });
  }
}
