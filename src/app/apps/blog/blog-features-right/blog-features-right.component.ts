import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-features-right',
  templateUrl: './blog-features-right.component.html',
  styleUrls: ['./blog-features-right.component.css']
})
export class BlogFeaturesRightComponent implements OnInit {

  imagePath='../assets/images/innerpage/about-us.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
