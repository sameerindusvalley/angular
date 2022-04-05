import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../user-data.service'

@Component({
  selector: 'app-prac-service',
  templateUrl: './prac-service.component.html',
  styleUrls: ['./prac-service.component.css']
})
export class PracServiceComponent implements OnInit {
   name = '';
   email = '';
   mobile = '';



  constructor(private userDataServices:UserDataService) { 
  let userName = this.userDataServices.getUserData()
  console.log("sam",userName)
  // this.name = userName.name;
  console.log("sam",userName)
   this.name = userName.name;
   this.email = userName.email;
   this.mobile = userName.mobile;
  }
  

  ngOnInit(): void {
  }

}
