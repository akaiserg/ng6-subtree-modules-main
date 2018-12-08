import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Component1Component } from "./component1/component1.component";

const routes: Routes = [{ path: "", component: Component1Component, pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module2RoutingModule {}
