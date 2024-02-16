import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseURL="http://localhost:8080/api/job-postings";

  constructor(private httpClient: HttpClient) { }

  getJobsList(): Observable<Job[]>{
    return this.httpClient.get<Job[]>(`${this.baseURL}`);
  }

  createJob(job: Job): Observable<Job> {
    return this.httpClient.post<Job>(this.baseURL, job);
  }

  getJobById(id: bigint): Observable<Job>{
    return this.httpClient.get<Job>(`${this.baseURL}/${id}`);
  }

  updateJob(id: bigint, job: Job): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, job);
  }

  deleteJob(id: bigint): Observable<any> {
    const url = `${this.baseURL}/${id}`;
    return this.httpClient.delete(url);
  }
  
}
