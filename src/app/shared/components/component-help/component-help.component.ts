import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-component-help",
  templateUrl: "./component-help.component.html",
  styleUrls: ["./component-help.component.css"],
})
export class ComponentHelpComponent implements OnInit {
  @Input()
  dynamicdata: string;
  @Input()
  staticdata: string;
  constructor() {}

  ngOnInit() {}
}
