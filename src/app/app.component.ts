import { Component } from '@angular/core';


// interface IFormType {
//   username:string;
//   email:string;
//   password:string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  getSubmit(value:any){
    console.log(value)
  }
}
