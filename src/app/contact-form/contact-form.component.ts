import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  log(x:any){
    console.log(x);
  }
  submit(f:NgForm){
    console.log(f);   
   
  }
  contactMethods=[
    {id:1,name:"Email"},
    {id:2,name:"Phone"},
   
  ]


}
