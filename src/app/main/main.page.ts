import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToSubject(){

  }
}
