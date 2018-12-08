import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environment/environment";
import "rxjs/add/operator/timeout";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Example2Service {
  constructor(private httpClient: HttpClient) {}

  public call(): Observable<any> {
    return this.httpClient
      .post(environment.service_one, {
        id: "111111111",
        email: "test@test.com",
        phone: "123456789",
      })
      .timeout(5000);
  }
}
