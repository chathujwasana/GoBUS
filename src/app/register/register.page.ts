import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public submitDetails: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.submitDetails = this.formBuilder.group({
      fName : ['', Validators.required],
      lName : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  ngOnInit() {
    
  }

  submit(){
    if (this.submitDetails.invalid) {

      alert('Please fill in all fields.');
      
      return;
    }
  }
}
