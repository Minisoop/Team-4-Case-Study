import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenComponent } from './categories/men/men.component';
import { WomenComponent } from './categories/women/women.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewarrivalComponent } from './categories/newarrival/newarrival.component';
import { BestsellingComponent } from './categories/bestselling/bestselling.component';
import { ContactComponent } from './contact/contact.component';
import { AllensollyComponent } from './brand/allensolly/allensolly.component';
import { GucciComponent } from './brand/gucci/gucci.component';
import { PradaComponent } from './brand/prada/prada.component';
import { DenimComponent } from './home/offers/denim/denim.component';
import { SummerComponent } from './home/offers/summer/summer.component';
import { ThrowbackComponent } from './home/offers/throwback/throwback.component';

const routes:Routes= [
  // {
  //   path:"",
  //   children:[
  
  { path: 'sign-in',component:SignInComponent },
  { path: 'sign-up',component:SignUpComponent },
  //   ],
  // component: HomeComponent},

  { path: 'home',component:HomeComponent },
  { path: 'categories',component:CategoriesComponent},
  { path : 'men', component:MenComponent},
  { path: 'women' ,component:WomenComponent},
  { path: 'aboutus' ,component:AboutUsComponent},
  { path: 'newarrival' ,component:NewarrivalComponent},
  { path: 'bestselling' ,component:BestsellingComponent},
  { path: 'contact' ,component:ContactComponent},
  { path: 'shopnow1' ,component:AllensollyComponent}, 
  { path: 'shopnow2' ,component:GucciComponent},
  { path: 'shopnow3' ,component:PradaComponent},
  { path: 'shopnow4' ,component:SummerComponent},
  { path: 'shopnow5' ,component:ThrowbackComponent},
  { path: 'shopnow6' ,component:DenimComponent},

  { path: '**', redirectTo:" "}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }