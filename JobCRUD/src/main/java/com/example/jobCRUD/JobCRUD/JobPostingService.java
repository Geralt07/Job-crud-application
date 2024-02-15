package com.example.jobCRUD.JobCRUD;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class JobPostingService {

    @Autowired
    private JobPostingRepository jobPostingRepository;

    public List<JobPosting> getAllJobPostings() {
        return jobPostingRepository.findAll();
    }

    public JobPosting getJobPostingById(Long id) {
        return jobPostingRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Job posting with id " + id + " not found"));
    }

    @Transactional
    public JobPosting createJobPosting(JobPosting jobPosting) {

        return jobPostingRepository.save(jobPosting);
    }

    public JobPosting updateJobPosting(Long id, JobPosting updatedJobPosting) {
        if (jobPostingRepository.existsById(id)) {
            updatedJobPosting.setId(id);
            return jobPostingRepository.save(updatedJobPosting);
        }
        return null;
    }

    public void deleteJobPosting(Long id) {
        jobPostingRepository.deleteById(id);
    }
}
