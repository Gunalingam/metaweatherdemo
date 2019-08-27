import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationService } from '../shared/location.service';
import { Observable} from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { WeatherpopoverComponent } from '../weatherpopover/weatherpopover.component';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {

  searchInput = new FormControl('');
  CitySearchList$: Observable<any>;
  weatherForSelectedCity = [];
  constructor(private locationService: LocationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.searchInput.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((value) => {
      if (value) {
        this.CitySearchList$ = this.locationService.getlocation(value);
      }
    });
  }

  displayFn(option) {
    return option.title ? option.title : undefined;
  }

  onCitySelected($event) {
    this.locationService.getWeather($event.option.value.woeid).subscribe((result => {
      this.weatherForSelectedCity = result;
      this.openWeatherModal(result);
    }));
  }

  openWeatherModal(result) {
    const dialogRef = this.dialog.open(WeatherpopoverComponent, {
      data: result,
      width: '540px',
      height: '540px'
    });
  }

}
