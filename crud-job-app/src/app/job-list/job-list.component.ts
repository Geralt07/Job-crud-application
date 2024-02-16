import { Component } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {

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
  updateJob(id: bigint) {
    this.router.navigate(['update-job', id]);
    }
    
  deleteJob(id: bigint) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.jobService.deleteJob(id).subscribe(data=>{
        console.log(data);
        this.getJobs();
      })  
    }
  }
}
