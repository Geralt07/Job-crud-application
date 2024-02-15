package com.example.jobCRUD.JobCRUD;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Data
@Getter
@Setter
//@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_postings")
public class JobPosting {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //AUTO
    private Long id;

    @Column(name = "jobTitle")
    private String jobTitle;

    @Column(name = "company")
    private String company;

    @Column(name = "location")
    private String location;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "requirements", length = 1000)
    private String requirements;

//    @ManyToOne
//    @JoinColumn(name = "company_id")
//    private CompanyDetails company_id;


    public JobPosting(Long id, String jobTitle, String company, String location, String description, String requirements) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.description = description;
        this.requirements = requirements;
    }

    @Getter
    @ManyToOne(cascade = CascadeType.ALL) //one to one
    @JoinColumn(name="cd_id",referencedColumnName = "id")
    public Company companyObj= new Company();

    public void setCompanyObj(Company companyObj) {
        this.companyObj = companyObj;
    }

    public JobPosting(Long id, String jobTitle, String company, String location, String description, String requirements, Company companyObj) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.company = company;
        this.location = location;
        this.description = description;
        this.requirements = requirements;
        this.companyObj = companyObj;
    }
}



