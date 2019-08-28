import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

// Testing
import { locationSearchResultMock } from '../mock-db/location-search.mock';
import { weatherResultMock } from '../mock-db/weather-result.mock';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  readonly locationSearchURL = 'https://www.metaweather.com/api/location/search/?query=';
  readonly locationWeatherURL = 'https://www.metaweather.com/api/location';
  constructor(private http: HttpClient) { }

  getlocation(searchValue: string): Observable<any> {
    return of(locationSearchResultMock);
   // return this.http.get(`${this.locationSearchURL}${searchValue}`);
  }

  getWeather(woeid:any): Observable<any> {
    return of(weatherResultMock.filter((val)=>{return woeid === val.woeid;})[0]);
    return of(weatherResultMock);
   // return this.http.get(`${this.locationWeatherURL}/${woeid}`);
  }
}
