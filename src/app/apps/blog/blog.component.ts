import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];
  swim:string[] = ["SWIMMING","Swimming is normal for me. I'm relaxed. I'm comfortable, and I know my surroundings. It's my home.","assets/images/innerpage/swimming.jpg"]
  hiking:string[] = ["HIKING","Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you are climbing it.","assets/images/innerpage/hiking.jpg"]
  movie:string[] = ["WATCHING MOVIES","'Everything I learned I learned from the movies.' - Audrey Hepburn","assets/images/innerpage/movie.jfif"]
  music:string[] = ["MUSIC","When I hear music, I fear no danger. I am invulnerable. I see no foe. I am related to the earliest times, and to the latest.","assets/images/innerpage/music.png"]
  
  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }
}
