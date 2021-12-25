import { Component, OnInit } from '@angular/core';
import { API } from '../api';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css'],
})
export class ApisComponent implements OnInit {
  apis: API[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getApis();
  }
  
  getApis(): void {
    this.apiService.fatchData().subscribe((apis: API[]) => (this.apis = apis));
  }
}
