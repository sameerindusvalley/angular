import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder ,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-regester-form',
  templateUrl: './regester-form.component.html',
  styleUrls: ['./regester-form.component.css']
})
export class RegesterFormComponent implements OnInit {
  // form builder method start
  contactForm:FormGroup;
  constructor(private fb: FormBuilder) {
  }  

  ngOnInit(): void { 
    this.contactForm = this.fb.group({
      yourname: ['',[Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    
    });
   
  }
  formSubmit(val:any){
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      
      return; 
       

    }
    else(console.log("sameer" ,val) )
    // console.log("sam:",val.value)
  }
  // form builder method endr


// by using simple reactive method start
//   contactForm = new FormGroup({ 
//     yourname: new FormControl(''),
//     email: new FormControl(''),
//     mobile: new FormControl(''),
//   })
//   formSubmit(val:any){  
//     var name  = val.value['yourname'];
//     var email = val.email;
//     var mobile = val.mobile
//     console.log(` my name${name} email  ${email} ${mobile}`)
//     console.log(name)
//     console.log("val obj" ,val.value['email'])

//     console.log(val.value)
// }
// by using simple reactive method end

}
