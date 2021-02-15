import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
      <header class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
          <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
          <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav px-3">
              <li class="nav-item text-nowrap">
                  <ng-template target="navbar"></ng-template>
              </li>
          </ul>
      </header>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
