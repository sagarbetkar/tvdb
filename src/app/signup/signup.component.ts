import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: Object = {};
  constructor( private data: DataService ) { }

  ngOnInit() {
  }

  createUser() {
    this.data.createUser(this.user).subscribe((data) => this.user = data);
  }

}
