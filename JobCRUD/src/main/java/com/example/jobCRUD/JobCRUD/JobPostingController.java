package com.example.jobCRUD.JobCRUD;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
@RequestMapping("/api/job-postings")
public class JobPostingController {

    @Autowired
    private JobPostingService jobPostingService;

    @GetMapping
    public List<JobPosting> getAllJobPostings() {
        return jobPostingService.getAllJobPostings();
    }

    @GetMapping("/{id}")
    public JobPosting getJobPostingById(@PathVariable Long id) {
        return jobPostingService.getJobPostingById(id);
    }

    @PostMapping
    public JobPosting createJobPosting(@RequestBody JobPosting jobPosting) {
        return jobPostingService.createJobPosting(jobPosting);
    }

    @PutMapping("/{id}")
    public JobPosting updateJobPosting(@PathVariable Long id, @RequestBody JobPosting updatedJobPosting) {
        return jobPostingService.updateJobPosting(id, updatedJobPosting);
    }

    @DeleteMapping("/{id}")
    public void deleteJobPosting(@PathVariable Long id) {
        System.out.println("Job Deleted successfully");
        jobPostingService.deleteJobPosting(id);
    }
}
