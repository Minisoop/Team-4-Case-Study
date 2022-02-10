import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../common/user';
import { RegistrationService } from '../services/registration.service';

//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  sign_inForm:FormGroup;


user = new User();
msg = '';
  constructor(private router:Router,private _service : RegistrationService) { 
    
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        console.log("responce received");
        this.router.navigate(['/home'])
      },

      error => {
        console.log("exception occured");
        this.msg="Please Enter Valid Email and Password";
      }    
    )
  }
  onLoadSignUp(){
    this.router.navigate(['/sign-up']);
  } 

  photo="assets/images/login1.jpg";
  photo1="assets/images/facebook.png";
  photo2="assets/images/google.png";
  
    }