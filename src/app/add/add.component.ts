import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  shows$: object;

  constructor(private show: DataService) { }

  ngOnInit() {
  }

  updateSearch(event){
    console.log(event);
    //this.show.getTvdb(event.showName).subscribe((data) => this.shows$ = data['data']);
  }
}
