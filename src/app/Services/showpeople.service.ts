import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowpeopleService {

  constructor() { }

  userData(){
    return [
      {
        name: 'Nishant',
        age: 25
      },
      {
        name: 'Shailesh',
        age: 45
      },
      {
        name: 'Abhishek',
        age: 36
      },
      {
        name: 'Akshay',
        age: 65
      },
      {
        name: 'Ashish',
        age: 12
      },
      {
        name: 'Uday',
        age: 31
      },
      {
        name: 'Mayank',
        age: 45
      },
      {
        name: 'Raju',
        age: 74
      },
    ]
  }

}
