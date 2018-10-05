import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createUser(data) {
    return this.http.post("http://localhost:3000/auth/signup", JSON.stringify(data));
  }

  getTvdb(seriesName) {
    return this.http.get("http://localhost:3000/api/tvdb?seriesName=" + seriesName);
  }

  getAllShows() {
    return this.http.get("http://localhost:3000/api/shows");
  }
  

}
