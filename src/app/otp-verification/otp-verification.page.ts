import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {

  showInput: boolean = false;

  CountryJson = [
    { name: 'Sri Lanka', dial_code: '+94', code: 'SL' },
    
    ]

  otpNumber: string = '';
  btnText: string = 'Send OTP';
  Code: any;
  PhoneNo: any;
  CountryCode: any = '+91';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'

  confirmationResult: any;

  constructor() { }

  ngOnInit() {
  }

  countryCodeChange($event :any) {
    
  }
  // Button event after the nmber is entered and button is clicked
  signinWithPhoneNumber($event:any) {


    if (this.PhoneNo && this.CountryCode) {
    
      this.showInput = true;
      this.btnText = 'Submit'
    }
  }

  async showSuccess() {
    
  }

  async OtpVerification() {

  }
}
