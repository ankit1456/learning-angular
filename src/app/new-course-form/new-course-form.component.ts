import {
  FormArray,
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent implements OnInit {

  ngOnInit(): void {}

  // FormArry ***************
  // form=new FormGroup({
  //   topics:new FormArray([])
  // })

  
  // get topics () {
    //   return this.form.get('topics') as FormArray;
    // }
    // addTopic(topic:HTMLInputElement){
      //   this.topics.push(new FormControl(topic.value));
      //   topic.value=''
      
      // }
      // remove(topic:AbstractControl){
        //  const index= this.topics.controls.indexOf(topic)
        //  this.topics.removeAt(index);
        // }
        
    // FormBuilder ***************
        form:FormGroup

  constructor(private fb:FormBuilder){
    this.form=fb.group({
      username:['',Validators['required']],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    })


  }

}
