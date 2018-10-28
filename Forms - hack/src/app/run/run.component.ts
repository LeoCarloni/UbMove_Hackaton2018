import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RunComponent implements OnInit {

  runs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/run').subscribe(data => {
      console.log(data);
      this.runs = data;
    });
  }

}
