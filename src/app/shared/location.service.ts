import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

//Testing
import { locationSearchResultMock } from '../mock-db/location-search.mock';
import { weatherResultMock } from '../mock-db/weather-result.mock';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getlocation(searchValue:string):Observable<any>{
    return of(locationSearchResultMock);
  }

  getWeather(woeid:string):Observable<any>{
    return of(weatherResultMock);
  }
}
