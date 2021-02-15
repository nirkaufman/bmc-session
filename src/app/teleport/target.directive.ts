import {Directive, DoCheck, Input, OnInit, ViewContainerRef} from '@angular/core';
import {TeleportService} from "./teleport.service";

@Directive({selector: '[target]'})
export class TargetDirective {

  @Input('target')
  set targetName(name:string) {
    this.teleport.addTarget(name, this.viewContainerRef);
  };

  constructor(private teleport:TeleportService,
              private viewContainerRef: ViewContainerRef) {}

}
