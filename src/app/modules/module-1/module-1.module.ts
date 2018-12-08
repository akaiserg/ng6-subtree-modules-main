import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { Module1RoutingModule } from "./module-1-routing.module";

import { Component1Component } from "./component1/component1.component";

@NgModule({
  imports: [CommonModule, Module1RoutingModule, SharedModule],
  declarations: [Component1Component],
})
export class Module1Module {}
