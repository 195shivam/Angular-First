import { Component,Input, Output ,EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ShowpeopleService } from 'src/app/Services/showpeople.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 @Input() childData!:String;
 @Input() othrData!:String;
@Output() logDataEvent=new EventEmitter<String>();

user:any;
  constructor(userdata:ShowpeopleService){
    console.log(userdata);
    this.user=userdata.userData()
    console.log(this.user)
  }
 
}
