import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './app-material.module';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WeatherpopoverComponent } from './weatherpopover/weatherpopover.component';
import { httpInterceptorProviders } from './shared/httpinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardSearchComponent,
    WeatherpopoverComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents:[WeatherpopoverComponent]
})
export class AppModule { }
