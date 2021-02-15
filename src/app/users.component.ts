import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <p>
      users works!
    </p>
    
    <button (click)="doSomething()" 
            *renderTo="'navbar'">click me!</button>
    
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  @Output() event;

  constructor() { }

  ngOnInit(): void {
  }

  doSomething() {
    console.log('method from UsersComponent');
  }
}
