import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-blog-features-right',
  templateUrl: './blog-features-right.component.html',
  styleUrls: ['./blog-features-right.component.css']
})
export class BlogFeaturesRightComponent implements OnInit {

  @Input() title: any;
  constructor() { }

  ngOnInit(): void {
  }

}
