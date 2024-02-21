import { Component } from '@angular/core';
import { Job } from '../job';
import { JobService } from '../job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrl: './update-job.component.css'
})
export class UpdateJobComponent {
  id!: bigint ;
  job: Job = new Job();
  
  constructor(private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.jobService.getJobById(this.id).subscribe(data => {
      this.job = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.jobService.updateJob(this.id, this.job).subscribe( data =>{
      alert('Job updated successfully');
      this.goToJobList();
    }
    , error => console.log(error));
  }
  goToJobList(){
    this.router.navigate(['/jobs']);
  }
}
