import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getHistory() {
    return this.http.get('https://api.spacexdata.com/v3/history');
  }

  getFlightNumberPicture(flight_number) {
    return this.http.get('https://api.spacexdata.com/v3/launches/' + flight_number)
  }

  getRockets() {
    return this.http.get('https://api.spacexdata.com/v3/rockets')
  }

  getSingleRocket(rocketID) {
    return this.http.get('https://api.spacexdata.com/v3/rockets/' + rocketID) 
  }
}


