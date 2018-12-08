import { Component, OnInit } from "@angular/core";
import { Example1Handler } from "../handlers/example1.handler";
import { Example2Handler } from "../handlers/example2.handler";
import { Example3Handler } from "../handlers/example3.handler";
@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
  providers: [
    //  { provide: SingletonExampleService, useExisting: SingletonExampleStaticService },
    // { provide: SingletonExampleService, useClass: SingletonExampleStaticService }
  ],
})
export class Component1Component implements OnInit {
  public response: any;

  constructor(
    private example1Handler: Example1Handler,
    private example2Handler: Example2Handler,
    private example3Handler: Example3Handler
  ) {}
  ngOnInit() {
    // tslint:disable-next-line:no-commented-code
    // console.info(this.singletonExampleService.getTest());
  }

  public async callHandlerExample1() {
    try {
      const value: any = await this.example1Handler.call();
      this.response = JSON.stringify(value);
    } catch (e) {
      this.response = e.message;
    }
  }

  public callHandlerExample2() {
    this.example2Handler.call().subscribe(
      (response) => {
        this.response = JSON.stringify(response);
      },
      (error) => {
        this.response = error.message;
      }
    );
  }

  public callHandlerExample3() {
    this.example3Handler.call().subscribe(
      (response) => {
        this.response = JSON.stringify(response);
      },
      (error) => {
        this.response = error.message;
      }
    );
  }
}
