import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  isLoading:boolean = false;
  isnotLoading:boolean = true;
  constructor() { }

  ngOnInit() {


    setTimeout(() => {
      this.isLoading = true;
      this.isnotLoading = false;

    }, 8000);
  }

}
