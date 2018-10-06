import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: Object = {};
  constructor( private data: DataService, private toastrService: ToastrService ) { }

  ngOnInit() {
  }

  createUser() {
    this.data.createUser(this.user).subscribe((data) => {
      if(data['message'] == "User registered successfully") {
        console.log('User registered successfully');
        this.user = data;
        this.toastrService.success('User registered successfully', 'Successfully');
      } else {
        console.log('User registeration failed');
        this.toastrService.error('User registeration failed', 'Failed');
      }
    });
  }

}
