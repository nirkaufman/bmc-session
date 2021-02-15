import {Injectable, TemplateRef, ViewContainerRef} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TeleportService {
  private targetMap = new Map();

  addTarget(name: string, viewContainer: ViewContainerRef) {
    this.targetMap.set(name, viewContainer);
  }

  render(targetName: string, template: TemplateRef<any>) {
    this.targetMap.get(targetName).clear();
    this.targetMap.get(targetName).createEmbeddedView(template);
  }

}
