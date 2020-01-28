import { Component } from '@angular/core';
import { ProductService } from './shared/productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Store';
  products:Product[];
  orderDate:Date = new Date();

  constructor(private productService: ProductService){

  }

  ngOnInit(){
    this.title = "This is product store";
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}

class Product{
  productId:number;
  productName:string;
  inventoryQuantity:number;
  shipOnWeekends:boolean;
  maxBusinessDaysToShip:number;
  estimatedDeliveryDate:Date;
}
