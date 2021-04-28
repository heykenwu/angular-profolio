import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pj',
  templateUrl: './card-pj.component.html',
  styleUrls: ['./card-pj.component.css']
})
export class CardPjComponent implements OnInit {

  relayOn = [
    {
      image: '../assets/images/project/nfc.jpg',
      title: 'NFC box with Raspberry Pi 4',
      fieldText: 'A box opened by Android mobile with its developed NFC application. The application can also track the usage of the box',
      link: '/nfc-box'
    },
    {
      image: '../assets/images/project/sudoku_logo.jfif',
      title: 'Sudoku Solver in C++',
      fieldText: 'A C++ program that solves the soduku using Algorithm X with dancing links',
      link: '/sudoku-solver'
    },
    {
      image: '../assets/images/project/geo_banner.jpg',
      title: 'Geographic Information System',
      fieldText: 'A C++ program that uses latitude and longitude, which will allow us to deal with geographic features at any location on Earth',
      link: '/gis'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
