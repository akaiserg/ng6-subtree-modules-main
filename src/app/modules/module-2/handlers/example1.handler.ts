import { Injectable } from "@angular/core";
import { Example1Service } from "../services/example1.service";

@Injectable()
export class Example1Handler {
  constructor(private example1Service: Example1Service) {
    // tslint:disable-next-line:no-commented-code
    // console.info("CheckDataHandler loaded");
  }

  public async call(): Promise<any> {
    return await this.example1Service.call();
  }
}
