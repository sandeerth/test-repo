import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  withCredentials: true
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000, transactions:[]},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500, transactions:[]},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500, transactions:[]},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000, transactions:[]},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000, transactions:[]},
  }

  currentUser;

  constructor(private http:HttpClient) {
    this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails));

    if(this.currentUser){
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }

  getTransactions(){
    return this.http.get("http://localhost:3000/transactions", options);
  }
  
  deleteTransaction(id){
    return this.http.delete("http://localhost:3000/transactions/"+id, options);
  }

  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails = JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  register(name,acno,pin,password){
    const data={
      name,
      acno,
      pin,
      password,
      balance:0,
      transactions:[]
    }
    return this.http.post("http://localhost:3000/register", data);
  }

  login(acno1, password){
    var accno=parseInt(acno1);
    const data = {
      accno,
      password
    }
    return this.http.post("http://localhost:3000/login", data, options);
  }


  deposit(dpacno,dppin,dpamt){
    const data = {
      dpacno,
      dppin,
      dpamt
    };
    return this.http.post("http://localhost:3000/deposit", data, options);
  }

  withdraw(dpacno,dppin,dpamt){
    const data = {
      dpacno,
      dppin,
      dpamt
    };
    return this.http.post("http://localhost:3000/withdraw", data, options);
  }
}
