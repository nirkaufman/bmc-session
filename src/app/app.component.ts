import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  ElementRef, Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-navbar></app-navbar>
      <div class="container-fluid">
          <div class="row">
              <app-sidebar></app-sidebar>
              <app-main></app-main>
          </div>
      </div>
  `,
})
export class AppComponent {

}

