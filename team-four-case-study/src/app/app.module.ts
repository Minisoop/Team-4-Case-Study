import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './categories/men/men.component';
import { WomenComponent } from './categories/women/women.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewarrivalComponent } from './categories/newarrival/newarrival.component';
import { BestsellingComponent } from './categories/bestselling/bestselling.component';
import { CommonModule } from '@angular/common';
import { AllensollyComponent } from './brand/allensolly/allensolly.component';
import { GucciComponent } from './brand/gucci/gucci.component';
import { PradaComponent } from './brand/prada/prada.component';
import { SummerComponent } from './home/offers/summer/summer.component';
import { DenimComponent } from './home/offers/denim/denim.component';
import { ThrowbackComponent } from './home/offers/throwback/throwback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    WishlistComponent,
    ContactComponent,
    MenComponent,
    WomenComponent,
    NewarrivalComponent,
    BestsellingComponent,
    AllensollyComponent,
    GucciComponent,
    PradaComponent,
    SummerComponent,
    DenimComponent,
    ThrowbackComponent,
    ProfileComponent,
    ProductListComponent,
    ShoppingCartComponent,
    CartItemsComponent,
    OrderComponent,
    ProductComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent,ContactComponent]
})
export class AppModule { }
