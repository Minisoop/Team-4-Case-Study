import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
 
  constructor(private router:Router,private route:ActivatedRoute) { 
   
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

}

