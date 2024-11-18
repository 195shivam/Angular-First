import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  handleSubmit(){
    console.log(this.loginForm.value.username)
  }

}
