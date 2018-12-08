import { Injectable } from "@angular/core";
import { Example3Service } from "../services/example3.service";

import { Observable } from "rxjs/Observable";

@Injectable()
export class Example3Handler {
  constructor(private example3Service: Example3Service) {}

  public call(): Observable<any> {
    return this.example3Service.call();
  }
}
