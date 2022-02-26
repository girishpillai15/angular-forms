import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-dsahboard',
  templateUrl: './dsahboard.component.html',
  styleUrls: ['./dsahboard.component.css']
})
export class DsahboardComponent implements OnInit,OnDestroy {
  product:any=[];
  subs = new Subscription();
  constructor(private login:LoginServiceService,) { }

  ngOnInit(): void {
    console.log("hey")
    this.subs = this.login.getProduct().subscribe((data=>{
      this.product = data;
      console.log(this.product)
      console.log()
    }),err=>console.log(err))
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

}
