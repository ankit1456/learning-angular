import { UsernameValidators } from './reactive-form.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  form=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4),UsernameValidators.cannotContainSpace,UsernameValidators.shouldbeUnique]),
    password:new FormControl('',Validators.required)

  })
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  login(){

    
    this.form.setErrors({
      invalidLogin: true,
    })

  }
}
