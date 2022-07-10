import { Component, Input, OnInit, Output,EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input('isLiked') isFavorite:boolean;

 @Output('change') click=new EventEmitter();

 onClick(){
  this.isFavorite=!this.isFavorite
  this.click.emit({
    newValue:this.isFavorite
  })  
  
 }

}
