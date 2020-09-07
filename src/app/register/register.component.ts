import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name="";
  acno="";
  pwd="";
  pin="";

  registerForm = this.fb.group({
    name:['',[ Validators.required]],
    acno:['',[ Validators.required]],
    pwd:['',[ Validators.required]],
    pin:['',[ Validators.required]],
  

  })

  constructor(private dataService:DataService,
    private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getError(name){
    return this.registerForm.get(name).errors
     
    }
  
register(){

  if (this.registerForm.get('name').errors){
    alert("name is invalid");
  }
  if(this.registerForm.valid){
  const result=this.dataService.register(
    this.registerForm.value.name,
    this.registerForm.value.acno,
    this.registerForm.value.pin,
    this.registerForm.value.pwd);
    if (result){
      alert("successfully created account,please login");
      this.router.navigateByUrl("");
    }
  
}else{
  alert("form is invalid");
}
}
}