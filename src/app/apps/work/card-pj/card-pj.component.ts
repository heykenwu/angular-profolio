import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pj',
  templateUrl: './card-pj.component.html',
  styleUrls: ['./card-pj.component.css']
})
export class CardPjComponent implements OnInit {

  relayOn = [
    {
      image: 'assets/images/project/nfc.jpg',
      title: 'NFC box with Raspberry Pi 4',
      fieldText: 'A box opened by Android mobile with its developed NFC application. The application can also track the usage of the box',
      link: '/nfc-box'
    },
    {
      image: 'assets/images/project/sudoku_logo.jfif',
      title: 'Sudoku Solver in C++',
      fieldText: 'A C++ program that solves the soduku using Algorithm X with dancing links',
      link: '/sudoku-solver'
    },
    {
      image: 'assets/images/project/geo_banner.jpg',
      title: 'Geographic Information System',
      fieldText: 'A C++ program that uses latitude and longitude, which will allow us to deal with geographic features at any location on Earth',
      link: '/gis'
    },
    {
      image: 'assets/images/project/stego_detail_banner.jpg',
      title: 'Stego python application',
      fieldText: 'A python program that hide and extract the secret data within an image',
      link: '/stego'
    },
    {
      image: 'assets/images/project/ps_logo.jpg',
      title: 'Linux packet-sniffing application',
      fieldText: 'A C program that sniffs the packets of the victim machine',
      link: '/packet-sniffing'
    },
    {
      image: 'assets/images/project/covert_banner.jpg',
      title: 'Covert Channel Application in C',
      fieldText: 'A complete covert application that allow a user to access a port on a firewall, communicate with a "disguised" backdoor',
      link: '/covert-channel'
    },
    {
      image: 'assets/images/project/dns_logo.jpg',
      title: 'DNS Spoofing Application in Python',
      fieldText: 'A basic DNS spoofing application',
      link: '/dns-spoofing'
    },
    {
      image: 'assets/images/project/portfor_banner.webp',
      title: 'Port Forwarder in C',
      fieldText: 'A network application that uses advanced TCP/IP programming techniques, and implement a "Port Forwarder"',
      link: '/port-forwarder'
    },
    {
      image: '/assets/images/project/epoll_logo.jpg',
      title: 'Comparison between epoll and select server',
      fieldText: 'compare the scalability and performance of the select and epoll-based client server implementations',
      link: '/epoll-select'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
