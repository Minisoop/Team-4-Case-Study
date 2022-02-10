import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../common/user';

import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  sign_upForm:FormGroup;
  //  users:any = [];
  //  service: UsersService;
  // postForm: any;
 
   user = new User();
   msg = '';
  constructor(private router:Router,private _service : RegistrationService,) { 
 
  }  

  ngOnInit(){
  }
  onLoadLogin(){
    this.router.navigate(['/home']);
  } 
  onLoadCancel(){
    this.router.navigate(['/home']);
  } 
  onLoadSignIn(){
    this.router.navigate(['/sign-in']);
  } 
  
  myimage="assets/images/login1.jpg";

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("responce received");
        
        this.router.navigate(['/sign-in'])
      },
      error => {
        console.log("exception occured");
        this.msg="Bad Credentials";
      }
    )
      
    }   
    
  }



