import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Component1Component } from "./component1/component1.component";
import { Module2RoutingModule } from "./module-2-routing.module";

import { Example1Handler } from "./handlers/example1.handler";
import { Example2Handler } from "./handlers/example2.handler";
import { Example3Handler } from "./handlers/example3.handler";
import { Example1Service } from "./services/example1.service";
import { Example2Service } from "./services/example2.service";
import { Example3Service } from "./services/example3.service";

@NgModule({
  imports: [CommonModule, Module2RoutingModule, HttpClientModule],
  declarations: [Component1Component],
  providers: [
    HttpClient,
    Example1Handler,
    Example1Service,
    Example2Handler,
    Example2Service,
    Example3Handler,
    Example3Service,
  ],
})
export class Module2Module {}
