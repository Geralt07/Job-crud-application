package com.example.jobCRUD.JobCRUD;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "company_details")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company_name")
    private String company_name;

    @Column(name = "industry")
    private String industry;

    @Column(name = "address")
    private String address;

}
