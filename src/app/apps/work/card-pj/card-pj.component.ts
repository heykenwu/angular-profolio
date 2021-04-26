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
      title: 'NFC box',
      fieldText: 'A box opened by Android mobile with its developed NFC application. The application can also track the usage of the box.',
      link: '/nfc-box'
    },
    {
      image: '../assets/images/project/nfc.jpg',
      title: 'Fruitful Results',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.',
      link: '/nfc-box'
    },
    {
      image: '../assets/images/project/nfc.jpg',
      title: 'Instant Solutions',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.',
      link: '/nfc-box'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
