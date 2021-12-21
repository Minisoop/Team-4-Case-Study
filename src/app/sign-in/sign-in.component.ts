import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{

  constructor(private router:Router,private route:ActivatedRoute) { }
  onLoadSignUp(){
    this.router.navigate(['/sign-up']);
  } 

  photo="assets/images/login1.jpg";
  photo1="assets/images/facebook.png";
  photo2="assets/images/google.png";
  
}
