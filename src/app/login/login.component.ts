import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {LoginServiceService} from '../login-service.service'
import { Router} from '@angular/router'; 
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  signupForm!: FormGroup;
  success = '';
  subs = new Subscription();
  constructor(private formBuilder: FormBuilder,private login:LoginServiceService,private router: Router,) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
  
  });
  }
  onSubmit(){
    if(this.signupForm.valid)
    {
      this.subs =  this.login.getLogin(this.signupForm.value.username,this.signupForm.value.password).subscribe((value=>{
        this.success="Signup Success"
        console.log(value)
        this.router.navigate(['dashboard']);
      } 
      ),err=>this.success="Invalid Username or Password")
      
    }
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    
  }


}
