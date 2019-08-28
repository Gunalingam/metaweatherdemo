import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocationService } from '../shared/location.service';
import { Observable} from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { WeatherpopoverComponent } from '../weatherpopover/weatherpopover.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {

  searchInput = new FormControl('');
  CitySearchList$: Observable<any>;
  weatherForSelectedCity = [];
  weatherData:MatTableDataSource<any>;
  displayedColumns=['title','location_type','latt_long'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private locationService: LocationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.locationService.getlocation("san").subscribe((value)=>{
      this.weatherData = new MatTableDataSource<any>(value);
      this.weatherData.paginator = this.paginator;
    });

    this.searchInput.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((value) => {
      if (value) {
        this.weatherData.filter = value.trim().toLowerCase();
      }
    });
  }

  displayFn(option) {
    return option.title ? option.title : undefined;
  }

  onCitySelected($event) {
    this.locationService.getWeather($event.woeid).subscribe((result => {
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
