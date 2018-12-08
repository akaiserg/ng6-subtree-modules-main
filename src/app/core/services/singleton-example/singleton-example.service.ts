import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SingletonExampleService {
  protected test: string;

  constructor() {
    // tslint:disable-next-line:no-commented-code
    // console.info("SingletonExampleService");
    this.test = new Date().toString();
  }

  public getTest(): string {
    return this.test;
  }
}
