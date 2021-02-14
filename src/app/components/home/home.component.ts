import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  historys: any;

  ngOnInit(): void {
    this.apiService.getHistory().subscribe(response => {
      this.historys = response;
    })
  }
}