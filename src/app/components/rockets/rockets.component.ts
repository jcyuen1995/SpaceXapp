import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apis.service';


@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  rockets: any;

  ngOnInit(): void {
    this.apiService.getRockets().subscribe(response => {
      console.log(response);
      this.rockets = response;
    })
  }


}
