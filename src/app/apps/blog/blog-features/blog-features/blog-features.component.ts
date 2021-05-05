import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-features',
  templateUrl: './blog-features.component.html',
  styleUrls: ['./blog-features.component.css']
})
export class BlogFeaturesComponent implements OnInit {

  @Input() title: any;


  constructor() { }

  ngOnInit(): void {
  }

}
