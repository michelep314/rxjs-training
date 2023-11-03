import { Component } from '@angular/core';
import { ShoppingSrvService } from 'src/app/Servizi/servizi.ecommerce/shopping-services.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent {


  constructor(servizioEc : ShoppingSrvService ){}
}
