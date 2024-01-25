import { Component , OnInit , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'my-first-project'; 
  
  getMin(a,b){
    if(a < b){
      return a;
    }

    return b;
  }
}