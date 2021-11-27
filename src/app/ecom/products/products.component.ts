import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productData = [];
  public categories;
  public masterProducts;
  constructor(
    public router: Router,
    public http: HttpClient) { }


  ngOnInit(): void {
    var productsList = this.http.get('./assets/products.json', {responseType: 'text'});
    productsList.subscribe(data => {
      this.productData = JSON.parse(data);
      this.masterProducts = JSON.parse(data);
    })
    var categories = this.http.get('./assets/cats.json', {responseType: 'text'});
    categories.subscribe(data => {
      this.categories = JSON.parse(data);
    })
  }

  logout():void{
    localStorage.setItem("loggedIn", "");
    this.router.navigate(["/requireLogin"]);
  }

  addToCart(product):void{
    this.masterProducts.find(x=>x.name===product.name).quantity++;
    product.quantity = this.masterProducts.find(x=>x.name===product.name).quantity;
  }
  removeFromCart(product):void{
    this.masterProducts.find(x=>x.name===product.name).quantity--;
    product.quantity = this.masterProducts.find(x=>x.name===product.name).quantity;
  }
  filterByCat(category?){
    if(category !== "all"){
      this.productData = this.masterProducts.filter(prod=>prod.category===category);
    }else{
      this.productData = [...this.masterProducts];
    }
  }

  itemsInCart(){
    var total = 0;
      this.masterProducts.forEach(x=> {
        if(x.quantity){
          total += x.quantity;
        }
      })
    return  total;
  }

  getTotal(){
    var total = 0;
    this.masterProducts.forEach(x=> {
      if(x.quantity && x.price){
        total += x.quantity*x.price;
      }
    })
    return  total;
  }
}
