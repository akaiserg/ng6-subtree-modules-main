import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/module-landing/module-landing.module#ModuleLandingModule",
    pathMatch: "full",
  },
  {
    path: "m1",
    loadChildren: "./modules/module-1/module-1.module#Module1Module",
    pathMatch: "full",
  },
  {
    path: "m2",
    loadChildren: "./modules/module-2/module-2.module#Module2Module",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
