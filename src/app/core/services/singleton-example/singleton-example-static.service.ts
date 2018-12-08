import { Injectable } from "@angular/core";
import { SingletonExampleService } from "@core/services/singleton-example/singleton-example.service";

@Injectable({
  providedIn: "root",
})
export class SingletonExampleStaticService extends SingletonExampleService {
  private myVal: string;

  constructor() {
    super();
    // tslint:disable-next-line:no-commented-code
    // console.info("SingletonExampleStaticService");
    this.myVal = "static value";
  }

  public getTest(): string {
    return this.myVal;
  }
}
