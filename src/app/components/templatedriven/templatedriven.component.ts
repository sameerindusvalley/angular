import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  formSubmit(val:any){  
    var values = val.value
    console.log(values)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
