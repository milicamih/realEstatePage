import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data';
import { RealEstate } from '../models/realEstate';

@Injectable({
  providedIn: 'root'
})
export class RealEsteteService {

  constructor(private http: HttpClient) { }

  getRealEstateData(): Observable<Data[]>  {
     return this.http.get<Data[]>('./assets/JSON/data.json');                     
   }
}
