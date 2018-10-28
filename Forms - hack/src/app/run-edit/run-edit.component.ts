import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-run-edit',
  templateUrl: './run-edit.component.html',
  styleUrls: ['./run-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RunEditComponent implements OnInit {

  run: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRun(this.route.snapshot.params['id']);
  }

  getRun(id) {
    this.http.get('/run/'+id).subscribe(data => {
      this.run = data;
    });
  }

  updateRun(id) {
    this.run.updated_date = Date.now();
    this.http.put('/run/'+id, this.run)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/run-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
