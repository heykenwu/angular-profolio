import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceblogService } from '../blog/blog-service.service';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    email_: new FormControl(''),
    question: new FormControl(''),
  });

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
