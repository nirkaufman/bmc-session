import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ApiService {
  count = 1;

  constructor() {
    console.log("ApiService instance");
  }

  inc() {
    this.count++;
  }
}
