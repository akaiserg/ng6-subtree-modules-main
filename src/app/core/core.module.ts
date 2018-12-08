import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { CurrentLocationService } from "@core/services/current-location/current-location.service";
import { SingletonExampleStaticService } from "@core/services/singleton-example/singleton-example-static.service";
import { SingletonExampleService } from "@core/services/singleton-example/singleton-example.service";
@NgModule({
  imports: [CommonModule],

  declarations: [],
  providers: [],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [SingletonExampleService, SingletonExampleStaticService, CurrentLocationService],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: CoreModule
  ) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }
}
