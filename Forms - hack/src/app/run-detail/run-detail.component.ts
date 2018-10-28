import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RunDetailComponent implements OnInit {

  run = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getRunDetail(this.route.snapshot.params['id']);
  }

  getRunDetail(id) {
    this.http.get('/run/'+id).subscribe(data => {
      this.run = data;
    });
  }

  deleteRun(id) {
    this.http.delete('/run/'+id)
      .subscribe(res => {
          this.router.navigate(['/runs']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
