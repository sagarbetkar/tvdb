import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subshows$: Object;

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getAllShows().subscribe((data) => this.subshows$ = JSON.parse(data['data']) );
  }

}
