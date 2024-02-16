import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  {path:'jobs',component:JobListComponent},
  {path:'company-details',component:CompanyDetailsComponent},
  {path:'home-page',component:HomePageComponent},
  {path:'',redirectTo:'home-page',pathMatch:'full'}, 
  {path:'create-job',component:CreateJobComponent},
  {path:'update-job/:id', component:UpdateJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
