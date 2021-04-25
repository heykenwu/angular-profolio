import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
  }

  ngOnInit(): void {
  }

}
