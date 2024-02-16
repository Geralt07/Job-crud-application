import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateJobComponent } from './create-job/create-job.component';
import { FormsModule } from '@angular/forms';
import { UpdateJobComponent } from './update-job/update-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    CreateJobComponent,
    UpdateJobComponent,
    HomePageComponent,
    NavBarComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
