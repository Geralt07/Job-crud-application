export class Job {
    id!: bigint;
    jobTitle!: string;
    company!: string;
    location!: string;
    description!: string;
    requirements!: string;
    companyObj:{
        id: undefined;
        company_name:undefined;
        industry:undefined;
        address:undefined;   
    }= { id:undefined, company_name:undefined, industry:undefined,address:undefined};
}
