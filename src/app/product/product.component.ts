import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component ({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
    `.onlineClass{
            color:red}`
  ]
  // providers: [ProductService]
})

export class ProductComponent implements OnInit {
  mainHeading: string = '****Product List****';
  localval = localStorage.getItem('UserloggedIntime');
  title: string = 'Search Product By:';
  userSearch: string;
  imageWidth: Number = 70;
  serverStatus: string = 'offline';
  OutStr: string = 'Number of product Filter: ';
  users: any[] = ['John', 'Mark', 'Shmmy', 'Pooja', 'Aakash'];
  showImage: Boolean = false;
  // imgUrl: String = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png";

  constructor(private _productService: ProductService) {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'offline';
  }

  products: IProduct[];

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe((data) => this.products = data);
  }

  // This is moved to service class
    /*products: IProduct[] = [
    {
      '_id': '5a05dacc734d1d68d42d31f3',
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.5,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      '_id': '5a05daec734d1d68d42d32ca',
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }
  ];*/

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onDataReceive(message: string) {
    this.mainHeading = '~~~~~Product List~~~~~  ' + message;
  }
}
