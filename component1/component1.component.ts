import { Component, OnInit } from "@angular/core";
import { CurrentLocationService } from "@core/services/current-location/current-location.service";
import { SingletonExampleService } from "@core/services/singleton-example/singleton-example.service";
@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
})
export class Component1Component implements OnInit {
  public dynamicdata = "This is dynamic data from Component1Component ---";

  constructor(
    private singletonExampleService: SingletonExampleService,
    private currentLocationService: CurrentLocationService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line:no-commented-code
    // this.dynamicdata = new Date().toString();
    setInterval(() => {
      this.dynamicdata = new Date().toString();
    }, 1000);
    // tslint:disable-next-line:no-commented-code
    // console.info(this.singletonExampleService.getTest());
    // console.info(this.currentLocationService.getPath());
  }
}
