import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealEsteteService } from '../shared/services/real-estete.service';
import { Data } from '../shared/models/data';

@Component({
  selector: 'app-for-rent',
  templateUrl: './for-rent.component.html',
  styleUrls: ['./for-rent.component.scss']
})
export class ForRentComponent implements OnInit {

  rentingRealStatesArray: Data[]=[];

  
  constructor(private http: HttpClient, private realEstateService: RealEsteteService) { }
  
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.realEstateService.getRealEstateData().subscribe(data => {
      this.rentingRealStatesArray = this.filterSellingRealStates(data);
      console.log(this.rentingRealStatesArray);
    }, error => {
      console.log('Error while get latest currency rates data !');
    });
  }


  filterSellingRealStates(data: Data[]): Data[] {
    return data.filter(item => item.data.negotiation === "let");
  }
}