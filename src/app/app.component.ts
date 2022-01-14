import { Component } from '@angular/core';
import { JobListingItem } from './job-listing.model';
import { JobListingsService } from './job-listings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JobListingsService]
})
export class AppComponent {
  title = 'job-listings-with-filtering';

  jobListingsArray: JobListingItem[];

  filterArray: String[] = [];
  constructor(private JobListingService: JobListingsService) { }

  ngOnInit(): void {
    this.jobListingsArray = this.JobListingService.getJobListings();
  }
  
  addFilterValue(filterValue){
    if(this.filterArray.indexOf(filterValue) === -1){
      this.filterArray.push(filterValue);
    }else{
      //else do nothing
    }
  }

  clearFilter(){
    this.filterArray = [];
  }

  removeFilterValue(filterValue: String){
    this.filterArray.splice(this.filterArray.indexOf(filterValue),1);
  }

}
