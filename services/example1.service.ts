import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environment/environment";

@Injectable()
export class Example1Service {
  constructor(private httpClient: HttpClient) {}

  public call(): Promise<any> {
    return this.httpClient
      .post(environment.service_one, {
        id: "111111111",
        email: "test@test.com",
        phone: "123456789",
      })
      .toPromise();
    // .then((data) => data);
  }
}
