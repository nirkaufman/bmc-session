import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
      <p>
          dashboard works!
      </p>
      <button *renderTo="'navbar'" (click)="reload()" class="btn btn-lg btn-primary">click to reload</button>
  `,
})
export class DashboardComponent {


  reload() {
    console.log('reload');
  }

}
