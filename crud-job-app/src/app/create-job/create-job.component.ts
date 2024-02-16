import { Component } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent {
  // job: Job = new Job();
  job:Job = new Job();
  constructor(private jobService: JobService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.job);
    this.saveEmployee();
  }
  
  saveEmployee(){
    this.jobService.createJob(this.job).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/jobs']);
  }
}
