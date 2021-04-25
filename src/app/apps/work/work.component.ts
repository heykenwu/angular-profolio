import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
   }

  ngOnInit(): void {
  }

}
