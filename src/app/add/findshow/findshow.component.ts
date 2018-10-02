import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-findshow',
  templateUrl: './findshow.component.html',
  styleUrls: ['./findshow.component.scss']
})
export class FindshowComponent implements OnInit {

  @Output() searchTermChanged: EventEmitter<object> = new EventEmitter<object>();
  shows$: Object;
  showName: String;

  constructor() { }

  ngOnInit() {
  }

  searchShow() {
    this.searchTermChanged.emit({showName: this.showName});
  }

}
