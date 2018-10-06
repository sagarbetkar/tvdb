import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../data.service';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.scss']
})
export class ShowlistComponent implements OnInit {

  @Input() shows: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  addfav() {
      this.data.postSubscribe(this.shows).subscribe((data) => this.shows = data);
  }

}
