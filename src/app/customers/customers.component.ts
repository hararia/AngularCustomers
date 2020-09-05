import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../shared/interfaces'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];

  constructor() { }

  ngOnInit(){
    this.title='Customers'
    this.people = [
      {id: 1, name: 'john Doe', city: 'Pheonix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
      {id: 2, name: 'Jane Doe', city: 'Miami', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      {id: 3, name: 'Michael thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      {id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)}
    ];
  }

}
