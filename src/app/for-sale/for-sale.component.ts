import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealEsteteService } from '../shared/services/real-estete.service';
import { Data } from '../shared/models/data';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.scss']
})
export class ForSaleComponent implements OnInit {

  sellingRealStatesArray: Data[]=[];

  constructor(private http: HttpClient, private realEstateService: RealEsteteService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.realEstateService.getRealEstateData().subscribe(data => {
    this.sellingRealStatesArray = this.filterSellingRealStates(data);
       console.log(this.sellingRealStatesArray);
     }, error => {
       console.log('Error while get latest currency rates data !');
     });
   }
 

filterSellingRealStates(data: Data[]): Data[] {
  return data.filter(item => item.data.negotiation ==="sale");
   }
 
}
 