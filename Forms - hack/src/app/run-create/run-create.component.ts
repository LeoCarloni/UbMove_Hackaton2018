import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-run-create',
  templateUrl: './run-create.component.html',
  styleUrls: ['./run-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RunCreateComponent implements OnInit {

  run = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveRun() {
    this.http.post('/run', this.run)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/run-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
