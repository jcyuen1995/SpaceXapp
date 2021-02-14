import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/apis.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() history: any;
  constructor(
    private apiService: ApiService
  ) { }

  @Input() flight_number: number;
  picture:string;

  ngOnInit(): void {
    if (this.flight_number === null) {
      this.picture = '../../../assets/spaceX.png';
    } else {
      this.apiService.getFlightNumberPicture(this.flight_number).subscribe(response => {
        this.picture = response["links"].mission_patch;
      })
    }
  }
}
