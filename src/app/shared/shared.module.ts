import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentHelpComponent } from "./components/component-help/component-help.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentHelpComponent],
  exports: [ComponentHelpComponent],
})
export class SharedModule {}
