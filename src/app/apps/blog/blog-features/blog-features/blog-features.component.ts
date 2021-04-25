import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-features',
  templateUrl: './blog-features.component.html',
  styleUrls: ['./blog-features.component.css']
})
export class BlogFeaturesComponent implements OnInit {

  imagePath='../assets/images/innerpage/about-us.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
