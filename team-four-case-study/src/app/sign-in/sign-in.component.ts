import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../services/user';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  title = 'frontend-angular-app';
  users:any = [];
   service: ApiService;

  

  constructor(private router:Router,private route:ActivatedRoute,service: ApiService) {
    this.service = service;
   }
  onLoadSignUp(){
    this.router.navigate(['/sign-up']);

  } 
  
  public getUsers(){
    this.service.getAllUsers().subscribe((response:any) => { 
       this.users = response;
       console.log(this.users);
    });
 }  

  onSubmit(form: NgForm){
    // console.log(this.form.value);
    const newUser: User={username: form.value.email, password: form.value.password};
    this.service.addNewUsers(newUser).subscribe((response) =>{
      console.log(response);
    });
  }

  photo="assets/images/login1.jpg";
  photo1="assets/images/facebook.png";
  photo2="assets/images/google.png";
  
}
