import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';

  post ={
    title:"Title",
    isFavorite:true
  }
  onFavoriteChange(isFavorite:{newValue:boolean}){
    console.log('favorite changed',isFavorite);
  }

  viewMode:string;
}
