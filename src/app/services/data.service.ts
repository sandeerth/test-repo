import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails={

    1001:{name:"user1",accno:1001,pin:1234,password:"userone",balance:3000},
    1002:{name:"user2",accno:1002,pin:1235,password:"userone",balance:3000},
    1003:{name:"user3",accno:1003,pin:1236,password:"userone",balance:3000},
    1004:{name:"user4",accno:1004,pin:1237,password:"userone",balance:3000},
    1005:{name:"user5",accno:1005,pin:1238,password:"userone",balance:3000},


}

  constructor() { }
  register(name,acno,pin,password){
    if(acno in this.accountDetails){
      alert("account no already exists, please login");
      return false
    }
    this.accountDetails[acno]={
      name,
      acno,
      pin,
      password,
      balance:0
    }
    alert("successfully created account , please login")
    return false;
  }
}
