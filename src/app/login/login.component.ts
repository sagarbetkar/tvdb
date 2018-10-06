import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Object = {};
  constructor(private data: DataService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.data.getLogin(this.user).subscribe((data) => {
      if(data['message'] == "User successfully logged in.") {
        console.log('User registered successfully');
        this.user = data;
        this.toastrService.success('User successfully logged in.', 'Successfully');
      } else {
        console.log('User login failed');
        this.toastrService.error('User login failed/Invalid email and/or password', 'Failed');
      }
    });
  }

}
