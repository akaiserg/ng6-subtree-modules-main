import { Injectable } from "@angular/core";
import { Example2Service } from "../services/example2.service";

import { Observable } from "rxjs/Observable";

@Injectable()
export class Example2Handler {
  constructor(private example2Service: Example2Service) {}

  public call(): Observable<any> {
    return this.example2Service.call();
  }
}
