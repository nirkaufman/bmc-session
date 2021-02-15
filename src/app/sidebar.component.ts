import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                  <li class="nav-item">
                      <a routerLink="/" class="nav-link active" aria-current="page">
                          <span data-feather="home"></span>
                          Dashboard
                      </a>
                  </li>
                  <li class="nav-item">
                      <a routerLink="users" class="nav-link">
                          <span data-feather="file"></span>
                          users
                      </a>
                  </li>
              </ul>
              
          </div>
      </nav>
  `,
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
