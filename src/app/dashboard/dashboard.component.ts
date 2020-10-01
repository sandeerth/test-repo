import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group({
    acno:[''],
    pin:[''],
    amt:[''],
  });

  withdrawForm = this.fb.group({
    acno:[''],
    pin:[''],
    amt:[''],
  });
  name="";
  constructor(public dataService:DataService, private fb: FormBuilder) { 
    this.name = localStorage.getItem("name")
  }

  ngOnInit(): void {
  }

  deposit(){
    this.dataService.deposit(
      this.depositForm.value.acno,
      this.depositForm.value.pin,
      this.depositForm.value.amt)
    .subscribe((result:any)=>{
      alert(result.message);
      alert(result.balance);
    },result => {
      alert(result.error.message);
    })
  }

  withdraw(){
    this.dataService.withdraw(this.withdrawForm.value.acno,
      this.withdrawForm.value.pin,
      this.withdrawForm.value.amt)
    .subscribe((result:any)=>{
      alert(result.message);
      alert(result.balance);
    },result => {
      alert(result.error.message);
    })
  }
}