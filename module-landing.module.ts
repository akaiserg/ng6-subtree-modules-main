import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModuleLandingRoutingModule } from "./module-landing-routing.module";
import { PrincipalComponent } from "./principal/principal.component";

@NgModule({
  imports: [CommonModule, ModuleLandingRoutingModule],
  declarations: [PrincipalComponent],
  providers: [],
})
export class ModuleLandingModule {}
