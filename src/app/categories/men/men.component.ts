import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
// import { ProductList } from ''
@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  currentRate = 5;
  public productList:any;
  constructor(private api : ApiService){}
  
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })

  }

}
