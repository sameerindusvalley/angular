import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  users ={
name :'',
email :'',
mobile : ''
  }
  contactForm = new FormGroup({
    yourname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),


  })
  formSubmit(val:any){  
      var values = val.value
      console.log(values)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
