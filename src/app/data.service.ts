import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(){
     return this.http.get("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json");
  }
}
