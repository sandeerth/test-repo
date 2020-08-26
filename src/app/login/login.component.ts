import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  acnoChange(event){
    this.acno=event.target.value;
  }
  pwdChange(event){
    this.pwd=event.target.value;
  }

  ngOnInit(): void {
  }
  login(){
    

    
        var acno=parseInt(this.acno);
        var password=this.pwd;
        try{
            if(isNaN(acno)) throw "not a valid no"
            if (acno.toString().length<2) throw"accnt no mus atleast 4 charectors"
        }
        catch(err){
            alert(err)
        }
        alert(acno+","+password)
        let data=this.accountDetails

        if(acno in data){
            let pwd=data[acno].password
            if (pwd==password){
                alert("successfull");
                window.location.href="home.html"
            }
            else{
                alert("incorrect username or pass")
            }
        }
        else{
            alert("user doesnot exist")
        }
  }

}
