import { Component } from '@angular/core';
import {ShowpeopleService} from './Services/showpeople.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  parentData="Data From Parent"
  anathrData="This is another data"
  logData(text:string){
    console.log(text)
  }
  name:any;

  peopleList = [
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
  isHidden:boolean=false

  toggle(){
    this.isHidden=!this.isHidden
  }
  count=1;
  incrementCount(){
    this.count++;
    console.log(this.count)
  }
  onSubmit(form:any){
    console.log(form.value)
  }
  constructor(){
    console.log("constructor")
  }
  ngOnInit(){
    console.log("OnInit")
  }
  ngOnChanges(){
    console.log("On change")
  }
  ngDoCheck(){
    console.log("docheck")
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");

  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

}
