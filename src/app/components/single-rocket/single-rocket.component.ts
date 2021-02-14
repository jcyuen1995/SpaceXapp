import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/apis.service'

@Component({
  selector: 'app-single-rocket',
  templateUrl: './single-rocket.component.html',
  styleUrls: ['./single-rocket.component.css']
})
export class SingleRocketComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  singleRocket: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const rocketID = params.rocketID;
      this.apiService.getSingleRocket(rocketID).subscribe(response => {
        console.log(response);
        this.singleRocket = response;
      })
    });
  }

}
