import {Directive, DoCheck, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {TeleportService} from "./teleport.service";

// div renderTo="name"
@Directive({selector: '[renderTo]'})
export class RenderToDirective implements DoCheck {
  @Input('renderTo') targetName: string;

  constructor(private teleport:TeleportService,
              private templateRef: TemplateRef<any>) {}

  ngDoCheck(): void {
    this.teleport.render(this.targetName, this.templateRef)
  }


}
