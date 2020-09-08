import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from'../services/data.service';
import { FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails={

        1001:{name:"user1",accno:1001,pin:1234,password:"userone",balance:3000},
        1002:{name:"user2",accno:1002,pin:1235,password:"userone",balance:3000},
        1003:{name:"user3",accno:1003,pin:1236,password:"userone",balance:3000},
        1004:{name:"user4",accno:1004,pin:1237,password:"userone",balance:3000},
        1005:{name:"user5",accno:1005,pin:1238,password:"userone",balance:3000},
    
    
    }
    acno="";
    pwd="";

    loginform = this.fb.group({
      acno:['',[ Validators.required]],
    pwd:['',[ Validators.required]]
     
    })

    getError(field){
      return (this.loginform.get(field).touched||this.loginform.get(field).dirty)&&this.loginform.get(field).errors; 
       
      }
  constructor(private router:Router,
    private dataService: DataService,
    private fb:FormBuilder) { }


  ngOnInit(): void {
  }

 
  login(){
    

    if(this.loginform.valid){
      const result = this.dataService.login(this.loginform.value.acno,this.loginform.value.pwd);
      if (result){
        alert("login successfull")
        this.router.navigateByUrl("dashboard")
      }else{
        alert("invcalid credentials")
      }
      }
      else{
        alert("invalid form")
      }
    }
  //       var acno=parseInt(this.loginform.value.acno);
  //       var password=this.loginform.value.pwd;
  //       try{
  //           if(isNaN(acno)) throw "not a valid no"
  //           if (acno.toString().length<2) throw"accnt no mus atleast 4 charectors"
  //       }
  //       catch(err){
  //           alert(err)
  //       }
  //       alert(acno+","+password)
  //       let data=this.dataService.accountDetails

  //       if(acno in data){
  //           let pwd=data[acno].password
  //           if (pwd==password){
  //               alert("successfull");
  //               // window.location.href="home.html"
  //               this.router.navigateByUrl("dashboard")
  //           }
  //           else{
  //               alert("incorrect username or pass")
  //           }
  //       }
  //       else{
  //           alert("user doesnot exist")
  //       }
  // }
  }

