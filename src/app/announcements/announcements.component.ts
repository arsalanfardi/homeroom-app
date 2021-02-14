import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  
  url = "https://wwg1gjqu2a.execute-api.us-east-1.amazonaws.com/dev/recommendations/2";
  announcements = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((data: any[]) => {
      this.announcements = data;
    });
  }

  ngOnInit(): void {
  }

}
