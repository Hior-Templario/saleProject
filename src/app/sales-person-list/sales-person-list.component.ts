import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com",5000),
    new SalesPerson("john", "Doe", "john.doe@luv2code.com",4000),
    new SalesPerson("Claire", "Murphy", "claire.Murphy@luv2code.com",9000),
    new SalesPerson("Mai", "Truong", "mail.truong@luv2code.com",6000),

  ];
  
}


