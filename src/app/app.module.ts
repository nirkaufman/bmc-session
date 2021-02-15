import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar.component';
import { SidebarComponent } from './sidebar.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(appRef: ApplicationRef) {

    const originalTick = appRef.tick;

    // patching AppTick to measure timing
    appRef.tick = function () {
      const windowPerformance = window.performance;
      const before = windowPerformance.now();
      const retValue = originalTick.apply(this, arguments);
      const after = windowPerformance.now();
      const runTime = after - before;
      console.log("CHANGE DETECTION TIME", runTime);
      return retValue;
    }
  }


}
