import { Component , OnInit , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'my-first-project'; 
  intervalSub;

  ngOnInit() {
    this.intervalSub = setInterval(() =>{
      console.log('Hello from ngOnInit');
    }, 1000);
  }

  ngOnDestroy() {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}  
