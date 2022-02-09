import { Component, OnInit} from '@angular/core';
import {FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { customValidators } from './customValidation/customValidators';
// import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    Sign_upForm:FormGroup;
  
    ngOnInit():void{
        this.Sign_upForm = new FormGroup({
          'name': new FormControl(null, [Validators.required,Validators.minLength(4)]),
          'email': new FormControl(null,Validators.required),
          'MobileNo': new FormControl(null,Validators.required),
          'DateOfBirth': new FormControl(null,[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
          'Password': new FormControl(null,[Validators.required, Validators.minLength(6)]),
          'ConfirmPassword': new FormControl(null,Validators.required/*, customValidators.mustMatch('Password', 'ConfirmPassword')*/)
        },
        //customValidators.mustMatch('Password', 'ConfirmPassword') //HERE
        );
    }

    get f() { return this.Sign_upForm.controls; }
  
  

  constructor(private router:Router,private route:ActivatedRoute) { 
   
  }

    onSubmit(){
         console.log(this.Sign_upForm);
       }
 
  onLoadCancel(){
    this.router.navigate(['/home']);
  } 
  onLoadSignIn(){
    this.router.navigate(['/sign-in']);
  } 
  
  myimage="assets/images/login1.jpg";

}

